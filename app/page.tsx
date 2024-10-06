import MainSection from '@/components/main/MainSection';
import useTranslation from 'next-translate/useTranslation'

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainSection/>
      <h1>{t('hello')}</h1>
    </main>
  );
}