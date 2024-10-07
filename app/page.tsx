import MainSection from '@/components/main/MainSection';
import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
 
type LocaleParams = {
  locale: string;
} 

export async function generateMetadata({params } : { params: LocaleParams} ) {
  const t = await getTranslations({params: params.locale, namespace: 'Metadata'});
  return {
    title: t('title')
  };
}

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainSection/>
      <h1>{t('hello')}</h1>
    </main>
  );
}