/* eslint-disable @typescript-eslint/no-explicit-any */


import { cn } from '@/lib/utils'
import React from 'react'
import RichText from '@/components/ui/rich-text'

type Props = {
  className?: string
} & any

export const BannerBlock: React.FC<Props> = ({ className, content, style }:any) => {
  return (
    <div className={cn('mx-auto my-8 w-full', className)}>
      <div
        className={cn('border py-3 px-6 flex items-center rounded', {
          'border-border bg-card': style === 'info',
          'border-error bg-error/30': style === 'error',
          'border-success bg-success/30': style === 'success',
          'border-warning bg-warning/30': style === 'warning',
        })}
      >
        <RichText data={content} enableGutter={false} enableProse={false} />
      </div>
    </div>
  )
}
