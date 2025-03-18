"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Upload, File, CheckCircle, AlertCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface CVUploadProps {
  onUploadComplete?: (file: File) => void
  className?: string
  maxSize?: number // in MB
  allowedTypes?: string[]
}

export function CVUpload({
  onUploadComplete,
  className,
  maxSize = 5, // Default 5MB
  allowedTypes = [".pdf", ".doc", ".docx"],
}: CVUploadProps) {
  const [file, setFile] = useState<File | null>(null)
  const [progress, setProgress] = useState(0)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null)
    setSuccess(false)

    if (!e.target.files || e.target.files.length === 0) {
      return
    }

    const selectedFile = e.target.files[0]

    // Check file size
    if (selectedFile.size > maxSize * 1024 * 1024) {
      setError(`File size exceeds ${maxSize}MB limit`)
      return
    }

    // Check file type
    const fileExtension = `.${selectedFile.name.split(".").pop()?.toLowerCase()}`
    if (!allowedTypes.includes(fileExtension)) {
      setError(`File type not supported. Please upload ${allowedTypes.join(", ")}`)
      return
    }

    setFile(selectedFile)
    simulateUpload(selectedFile)
  }

  const simulateUpload = (file: File) => {
    setUploading(true)
    setProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setUploading(false)
          setSuccess(true)
          if (onUploadComplete) onUploadComplete(file)
          return 100
        }
        return prev + 5
      })
    }, 100)
  }

  const handleRemove = () => {
    setFile(null)
    setProgress(0)
    setUploading(false)
    setSuccess(false)
    setError(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className={cn("space-y-4", className)}>
      {!file ? (
        <div className="cv-upload-container" onClick={() => fileInputRef.current?.click()}>
          <Upload className="cv-upload-icon" />
          <h3 className="font-medium mb-1">Upload your CV/Resume</h3>
          <p className="text-sm text-muted-foreground mb-2">Drag and drop or click to browse</p>
          <p className="text-xs text-muted-foreground">
            Supported formats: {allowedTypes.join(", ")} (Max {maxSize}MB)
          </p>
          <input
            type="file"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept={allowedTypes.join(",")}
          />
        </div>
      ) : (
        <div className="border rounded-lg p-4 bg-blue-50/50 dark:bg-blue-900/10">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <File className="h-5 w-5 text-blue-500" />
              <span className="font-medium text-sm truncate max-w-[200px]">{file.name}</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleRemove}
              className="h-8 w-8 text-blue-500 hover:text-blue-700 hover:bg-blue-100"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Remove file</span>
            </Button>
          </div>

          {uploading && (
            <div className="space-y-1">
              <Progress value={progress} className="h-2" indicatorClassName="bg-blue-500" />
              <p className="text-xs text-muted-foreground">Uploading... {progress}%</p>
            </div>
          )}

          {success && (
            <div className="flex items-center gap-2 text-sm text-green-600">
              <CheckCircle className="h-4 w-4" />
              <span>Upload complete</span>
            </div>
          )}
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}

