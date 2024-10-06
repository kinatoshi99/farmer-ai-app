"use client"

import * as React from "react"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'

export default function LanguageSwitch() {
  const { lang } = useTranslation()
  const [isEnglish, setIsEnglish] = React.useState(lang === 'en')
  
  const handleLanguageChange = async (checked: boolean) => {
    setIsEnglish(checked)
    await setLanguage(checked ? 'en' : 'th')
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="language-switch"
        checked={isEnglish}
        onCheckedChange={handleLanguageChange}
      />
      <Label htmlFor="language-switch">
        {isEnglish ? "English" : "ไทย"}
      </Label>
    </div>
  )
}