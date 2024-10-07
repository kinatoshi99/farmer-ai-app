"use client"

import { useLocale, useTranslations } from 'next-intl'
import {useRouter, usePathname} from '@/i18n/routing';
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useState, useTransition } from "react"

export default function LanguageSwitch() {
  const t = useTranslations('LanguageSwitch')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname();
  const [isEnglish, setIsEnglish] = useState(locale === 'en')
  const [isPending, startTransition] = useTransition()

  const handleLanguageChange = (checked: boolean) => {
    const newLocale = checked ? 'en' : 'th'
    startTransition(() => {
      router.replace(pathname, { locale: newLocale })
    })
    setIsEnglish(checked)
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="language-switch"
        checked={isEnglish}
        onCheckedChange={handleLanguageChange}
        className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
        disabled={isPending}
      />
      <Label htmlFor="language-switch" className="text-foreground">
        {t('label')}
      </Label>
    </div>
  )
}