'use client';

import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { subjects } from '@/constants'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const SubjectFilter = () => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentSubject = searchParams.get('subject') || 'all'

  const handleSubjectChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (value === 'all') {
      params.delete('subject')
    } else {
      params.set('subject', value)
    }

    const newUrl = `${pathname}?${params.toString()}`
    router.replace(newUrl, { scroll: false })
  }

  return (
    <Select value={currentSubject} onValueChange={handleSubjectChange}>
      <SelectTrigger className='input capitalize'>
        <SelectValue placeholder="Subject"/>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All subjects</SelectItem>
        {subjects.map((subject) => (
          <SelectItem key={subject} value={subject} className='capitalize'>
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default SubjectFilter