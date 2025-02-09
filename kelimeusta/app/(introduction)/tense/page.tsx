"use client";

import React from 'react';
import ConjugationTable from "@/components/conjugation-table";
import { useLanguage } from '@/hooks/useLanguage';
import { Paragraph } from '@/components/ui/paragraphs';

export default function Tenses() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen container mx-auto px-8 py-24">
      <div className="w-full md:w-[70rem] mx-auto space-y-12">
        {/* Introduction Section */}
        <section className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-center text-purple-600">
            Tenses
          </h1>
          <Paragraph>
            {language === "en"
              ? "Tenses are a category of verbs that express time reference. The reference of the time is sometimes absolute, and sometimes relative. Tenses are primarily used to indicate the time of an action. There are three main tenses: past, present, and future. Each of these tenses can be divided into four subcategories: simple, continuous, perfect, and perfect continuous. In the Turkish language, there are ten primary tenses, categorized based on time (past, present, future) and aspect (continuous, simple, reported, conditional)."
              : "Zamanlar, fiillerin zaman referansını ifade eden bir kategorisidir. Zaman referansı bazen mutlak, bazen de görelidir. Zamanlar, esas olarak bir eylemin zamanını belirtmek için kullanılır. Üç ana zaman vardır: geçmiş, şimdiki ve gelecek. Bu zamanların her biri dört alt kategoriye ayrılabilir: basit, süreklilik, mükemmel ve mükemmel süreklilik. Türkçede zamanlar, zaman (geçmiş, şimdiki, gelecek) ve görünüş (sürekli, basit, rivayet, koşul) temelinde sınıflandırılan on birincil zamandan oluşur."}
          </Paragraph>
        </section>

        <section className="space-y-6">
          <div className="border-l-4 border-orange-500 dark:border-blue-400 pl-6">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
              {language === 'en' ? 'Present Tense' : 'Şimdiki Zaman'}
            </h2>
          </div>

          <Paragraph>
            {language === "en"
              ? "Present tense is used to describe actions that are happening now or that are currently in progress. In Turkish, the present tense is formed by adding the suffixes "
              : "Şimdiki zaman, şu anda gerçekleşen ya da şu anda devam eden eylemleri tanımlamak için kullanılır. Türkçede şimdiki zaman, fiil köküne "}
            <span className="font-semibold">
              -ıyor, -iyor, -uyor, -üyor
            </span>{" "}
            {language === "en"
              ? "to the verb stem. The suffix used depends on the vowel harmony of the verb stem."
              : "eklerinin eklenmesiyle oluşur. Kullanılan ek, fiil kökünün ünlü uyumuna bağlıdır."}
          </Paragraph>

          <div className="mt-8">
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <ConjugationTable
                tense={language === 'en' ? 'Present Tense' : 'Şimdiki Zaman'}
                ben={["-ıyorum", "-iyorum", "-uyorum", "-üyorum"]}
                sen={["-ıyorsun", "-iyorsun", "-uyorsun", "-üyorsun"]}
                o={["-ıyor", "-iyor", "-uyor", "-üyor"]}
                biz={["-ıyoruz", "-iyoruz", "-uyoruz", "-üyoruz"]}
                siz={["-ıyorsunuz", "-iyorsunuz", "-uyorsunuz", "-üyorsunuz"]}
                onlar={["-ıyorlar", "-iyorlar", "-uyorlar", "-üyorlar"]}
              />
              <ConjugationTable
                tense={language === 'en' ? 'Example' : 'Örnek'}
                ben={["açıyorum", "seçiyorum", "okuyorum", "bölüyorum"]}
                sen={["açıyorsun", "seçiyorsun", "okuyorsun", "bölüyorsun"]}
                o={["açıyor", "seçiyor", "okuyor", "bölüyor"]}
                biz={["açıyoruz", "seçiyoruz", "okuyoruz", "bölüyoruz"]}
                siz={["açıyorsunuz", "seçiyorsunuz", "okuyorsunuz", "bölüyorsunuz"]}
                onlar={["açıyorlar", "seçiyorlar", "okuyorlar", "bölüyorlar"]}
              />
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-6">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
              {language === 'en' ? 'Simple Present Tense' : 'Basit Şimdiki Zaman'}
            </h2>
          </div>
          <Paragraph>
            {language === "en"
              ? "The simple present tense is used to describe habitual actions, general truths, and routines. In Turkish, the simple present tense is formed by adding the suffixes "
              : "Geniş zaman, alışkanlıkları, genel doğruları ve rutinleri tanımlamak için kullanılır. Türkçede geniş zaman, fiil köküne "}
            <span className="font-semibold">-r, -ar, -er</span>{" "}
            {language === "en"
              ? "to the verb stem, depending on vowel harmony. It indicates actions that are repeated or generally true."
              : "eklerinin eklenmesiyle oluşur. Kullanılan ek, ünlü uyumuna bağlıdır ve tekrarlanan veya genel olarak doğru olan eylemleri ifade eder."}
          </Paragraph>


          <div className="mt-8">
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <ConjugationTable
                tense={language === 'en' ? 'Simple Present Tense' : 'Basit Şimdiki Zaman'}
                ben={["-rım", "-rim", "-rum", "-rüm"]}
                sen={["-rsın", "-rsin", "-rsun", "-rsün"]}
                o={["-r", "-r", "-r", "-r"]}
                biz={["-rız", "-riz", "-ruz", "-rüz"]}
                siz={["-rsınız", "-rsiniz", "-rsunuz", "-rsünüz"]}
                onlar={["-rlar", "-rler", "-rlar", "-rler"]}
              />
              <ConjugationTable
                tense={language === 'en' ? 'Example' : 'Örnek'}
                ben={["bakarım", "bilirim", "okurum", "görürüm"]}
                sen={["bakarsın", "bilirsin", "okursun", "görürsün"]}
                o={["bakar", "bilir", "okur", "görür"]}
                biz={["bakarız", "biliriz", "okuruz", "görürüz"]}
                siz={["bakarsınız", "bilirsiniz", "okursunuz", "görürsünüz"]}
                onlar={["bakarlar", "bilirler", "okurlar", "görürler"]}
              />
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="border-l-4 border-green-500 dark:border-green-400 pl-6">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
              {language === 'en' ? 'Future Tense' : 'Gelecek Zaman'}
            </h2>
          </div>
          <Paragraph>
            {language === "en"
              ? "The future tense is used to describe actions that will happen in the future. In Turkish, the future tense is formed by adding the suffixes "
              : "Gelecek zaman, gelecekte gerçekleşecek eylemleri tanımlamak için kullanılır. Türkçede gelecek zaman, fiil köküne "}
            <span className="font-semibold">-ecek, -acak</span>{" "}
            {language === "en"
              ? "to the verb stem, depending on vowel harmony. When the verb stem ends in a vowel, the buffer letter 'y' is added before the suffix. This tense indicates actions that are planned or expected to happen."
              : "eklerinin eklenmesiyle oluşur. Fiil kökü ünlü ile biterse, ekten önce 'y' tampon harfi eklenir. Bu zaman, planlanan veya beklenen eylemleri ifade eder."}
          </Paragraph>

          <div className="mt-8">
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <ConjugationTable
                tense={language === 'en' ? 'Future Tense' : 'Gelecek Zaman'}
                ben={["-acağım", "-eceğim", "-[y]acağım", "-[y]eceğim"]}
                sen={["-acaksın", "-eceksin", "-[y]acaksın", "-[y]eceksin"]}
                o={["-acak", "-ecek", "-[y]acak", "-[y]ecek"]}
                biz={["-acağız", "-eceğiz", "-[y]acağız", "-[y]eceğiz"]}
                siz={["-acaksınız", "-eceksiniz", "-[y]acaksınız", "-[y]eceksiniz"]}
                onlar={["-acaklar", "-ecekler", "-[y]acaklar", "-[y]ecekler"]}
              />
              <ConjugationTable
                tense={language === 'en' ? 'Example' : 'Örnek'}
                ben={["gideceğim", "yapacağım", "arayacağım", "yiyeceğim"]}
                sen={["gideceksin", "yapacaksın", "arayacaksın", "yiyeceksin"]}
                o={["gidecek", "yapacak", "arayacak", "yiyecek"]}
                biz={["gideceğiz", "yapacağız", "arayacağız", "yiyeceğiz"]}
                siz={["gideceksiniz", "yapacaksınız", "arayacaksınız", "yiyeceksiniz"]}
                onlar={["gidecekler", "yapacaklar", "arayacaklar", "yiyecekler"]}
              />
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="border-l-4 border-yellow-500 dark:border-yellow-400 pl-6">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
              {language === 'en' ? 'Simple Past Tense' : 'Di’li Geçmiş Zaman'}
            </h2>
          </div>
          <Paragraph>
            {language === "en"
              ? "The simple past tense is used to describe completed actions in the past. In Turkish, the simple past tense is formed by adding the suffixes "
              : "Di’li geçmiş zaman, geçmişte tamamlanmış eylemleri tanımlamak için kullanılır. Türkçede geçmiş zaman, fiil köküne "}
            <span className="font-semibold">-di, -dı, -du, -dü</span>{" "}
            {language === "en"
              ? "or "
              : "veya "}
            <span className="font-semibold">-ti, -tı, -tu, -tü</span>{" "}
            {language === "en"
              ? "to the verb stem, depending on vowel harmony and consonant harmony. This tense indicates actions that occurred and were completed in the past."
              : "eklerinin eklenmesiyle oluşur. Kullanılan ek, ünlü uyumuna ve ünsüz uyumuna bağlıdır. Bu zaman, geçmişte gerçekleşmiş ve tamamlanmış eylemleri ifade eder."}
          </Paragraph>

          <div className="mt-8">
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <ConjugationTable
                tense={language === 'en' ? 'Simple Past Tense' : 'Di’li Geçmiş Zaman'}
                ben={["-dim", "-dım", "-dum", "-düm"]}
                sen={["-din", "-dın", "-dun", "-dün"]}
                o={["-di", "-dı", "-du", "-dü"]}
                biz={["-dik", "-dık", "-duk", "-dük"]}
                siz={["-diniz", "-dınız", "-dunuz", "-dünüz"]}
                onlar={["-diler", "-dılar", "-dular", "-düler"]}
              />
              <ConjugationTable
                tense={language === 'en' ? 'Example' : 'Örnek'}
                ben={["geldim", "anladım", "uyudum", "gördüm"]}
                sen={["geldin", "anladın", "uyudun", "gördün"]}
                o={["geldi", "anladı", "uyudu", "gördü"]}
                biz={["geldik", "anladık", "uyuduk", "gördük"]}
                siz={["geldiniz", "anladınız", "uyudunuz", "gördünüz"]}
                onlar={["geldiler", "anladılar", "uyudular", "gördüler"]}
              />
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="border-l-4 border-purple-500 dark:border-purple-400 pl-6">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
              {language === 'en' ? 'Reported Past Tense' : 'Miș’li Geçmiş Zaman'}
            </h2>
          </div>
          <Paragraph>
            {language === "en"
              ? "The reported past tense is used to describe actions that the speaker did not witness firsthand but learned about from others or deduced. In Turkish, this tense is formed by adding the suffixes "
              : "Miș’li geçmiş zaman, konuşmacının doğrudan tanık olmadığı, başkalarından öğrendiği veya çıkarsadığı eylemleri tanımlamak için kullanılır. Türkçede bu zaman, fiil köküne "}
            <span className="font-semibold">-miş, -mış, -muş, -müş</span>{" "}
            {language === "en"
              ? "to the verb stem, depending on vowel harmony. It conveys a sense of uncertainty or hearsay."
              : "eklerinin eklenmesiyle oluşur. Bu zaman, belirsizlik veya dolaylı bir anlatımı ifade eder."}
          </Paragraph>

          <div className="mt-8">
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <ConjugationTable
                tense={language === 'en' ? 'Reported Past Tense' : 'Miș’li Geçmiş Zaman'}
                ben={["-mişim", "-mışım", "-muşum", "-müşüm"]}
                sen={["-mişsin", "-mışsın", "-muşsun", "-müşsün"]}
                o={["-miş", "-mış", "-muş", "-müş"]}
                biz={["-mişiz", "-mışız", "-muşuz", "-müşüz"]}
                siz={["-mişsiniz", "-mışsınız", "-muşsunuz", "-müşsünüz"]}
                onlar={["-mişler", "-mışlar", "-muşlar", "-müşler"]}
              />
              <ConjugationTable
                tense={language === 'en' ? 'Example' : 'Örnek'}
                ben={["gitmişim", "kalmışım", "duymuşum", "görmüşüm"]}
                sen={["gitmişsin", "kalmışsın", "duymuşsun", "görmüşsün"]}
                o={["gitmiş", "kalmış", "duymuş", "görmüş"]}
                biz={["gitmişiz", "kalmışız", "duymuşuz", "görmüşüz"]}
                siz={["gitmişsiniz", "kalmışsınız", "duymuşsunuz", "görmüşsünüz"]}
                onlar={["gitmişler", "kalmışlar", "duymuşlar", "görmüşler"]}
              />
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="border-l-4 border-green-500 dark:border-green-400 pl-6">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
              {language === 'en' ? 'Present Perfect Tense' : 'Şimdiki Mükemmel Zaman'}
            </h2>
          </div>
          <Paragraph>
            {language === "en"
              ? "The present perfect tense in Turkish is used to express actions that have been completed recently or actions that have relevance to the present. It is formed by combining the past tense suffixes "
              : "Türkçede şimdiki mükemmel zaman, yakın zamanda tamamlanan ya da şu anla ilişkili olan eylemleri ifade etmek için kullanılır. Bu zaman, geçmiş zaman eklerinin "}
            <span className="font-semibold">-miş, -mış, -muş, -müş</span>{" "}
            {language === "en"
              ? "with the present auxiliary forms. This tense shows a connection between past actions and their effect on the present."
              : "yardımcı eklerle birleştirilmesiyle oluşur. Geçmiş eylemler ile onların şu andaki etkisi arasında bir bağlantı kurar."}
          </Paragraph>

          <div className="mt-8">
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <ConjugationTable
                tense={language === 'en' ? 'Present Perfect Tense' : 'Şimdiki Mükemmel Zaman'}
                ben={["-mişim", "-mışım", "-muşum", "-müşüm"]}
                sen={["-mişsin", "-mışsın", "-muşsun", "-müşsün"]}
                o={["-miş", "-mış", "-muş", "-müş"]}
                biz={["-mişiz", "-mışız", "-muşuz", "-müşüz"]}
                siz={["-mişsiniz", "-mışsınız", "-muşsunuz", "-müşsünüz"]}
                onlar={["-mişler", "-mışlar", "-muşlar", "-müşler"]}
              />
              <ConjugationTable
                tense={language === 'en' ? 'Example' : 'Örnek'}
                ben={["gitmişim", "görmüşüm", "duymuşum", "yapmışım"]}
                sen={["gitmişsin", "görmüşsün", "duymuşsun", "yapmışsın"]}
                o={["gitmiş", "görmüş", "duymuş", "yapmış"]}
                biz={["gitmişiz", "görmüşüz", "duymuşuz", "yapmışız"]}
                siz={["gitmişsiniz", "görmüşsünüz", "duymuşsunuz", "yapmışsınız"]}
                onlar={["gitmişler", "görmüşler", "duymuşlar", "yapmışlar"]}
              />
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="border-l-4 border-yellow-500 dark:border-yellow-400 pl-6">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
              {language === 'en' ? 'Conditional Tense' : 'Koşul Kipi'}
            </h2>
          </div>
          <Paragraph>
            {language === "en"
              ? "The conditional tense in Turkish is used to express conditions or hypothetical situations. It is formed by adding the suffixes "
              : "Türkçede koşul kipi, şartları veya varsayımsal durumları ifade etmek için kullanılır. "}
            <span className="font-semibold">-se, -sa</span>{" "}
            {language === "en"
              ? "to the verb stem, followed by personal endings. It describes what would happen under certain circumstances."
              : "fiil köküne eklenir ve ardından şahıs ekleri gelir. Belirli koşullar altında ne olacağını ifade eder."}
          </Paragraph>

          <div className="mt-8">
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <ConjugationTable
                tense={language === 'en' ? 'Conditional Tense' : 'Koşul Kipi'}
                ben={["-sem", "-sam"]}
                sen={["-sen", "-san"]}
                o={["-se", "-sa"]}
                biz={["-sek", "-sak"]}
                siz={["-seniz", "-sanız"]}
                onlar={["-seler", "-salar"]}
              />
              <ConjugationTable
                tense={language === 'en' ? 'Example' : 'Örnek'}
                ben={["yaparsam", "gelirsem", "okursam", "görürsem"]}
                sen={["yaparsan", "gelirsen", "okursan", "görürsen"]}
                o={["yaparsa", "gelirse", "okursa", "görürse"]}
                biz={["yaparsak", "gelirsek", "okursak", "görürsek"]}
                siz={["yaparsanız", "gelirseniz", "okursanız", "görürseniz"]}
                onlar={["yaparlarsa", "gelirlerse", "okurlarsa", "görürlerse"]}
              />
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="border-l-4 border-green-500 dark:border-green-400 pl-6">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
              {language === 'en' ? 'Necessitative Tense' : 'Gereklilik Zamanı'}
            </h2>
          </div>
          <Paragraph>
            {language === "en"
              ? "The necessitative tense in Turkish is used to express necessity or obligation. It is formed by adding the suffixes "
              : "Türkçede gereklilik zamanı, zorunluluk veya gereklilik ifade etmek için kullanılır. "}
            <span className="font-semibold">-meli, -malı</span>{" "}
            {language === "en"
              ? "to the verb stem, followed by personal endings. It is used to indicate that an action must or should be done."
              : "fiil köküne eklenir ve ardından şahıs ekleri gelir. Bir eylemin yapılması gerektiğini ifade eder."}
          </Paragraph>

          <div className="mt-8">
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <ConjugationTable
                tense={language === 'en' ? 'Necessitative Tense' : 'Gereklilik Zamanı'}
                ben={["-meliyim", "-malıyım"]}
                sen={["-melisin", "-malısın"]}
                o={["-meli", "-malı"]}
                biz={["-meliyiz", "-malıyız"]}
                siz={["-melisiniz", "-malısınız"]}
                onlar={["-meliler", "-malılar"]}
              />
              <ConjugationTable
                tense={language === 'en' ? 'Example' : 'Örnek'}
                ben={["yapmalıyım", "gelmeliyim", "okumalıyım", "görmeliyim"]}
                sen={["yapmalısın", "gelmelisin", "okumalısın", "görmelisin"]}
                o={["yapmalı", "gelmeli", "okumalı", "görmeli"]}
                biz={["yapmalıyız", "gelmeliyiz", "okumalıyız", "görmeliyiz"]}
                siz={["yapmalısınız", "gelmelisiniz", "okumalısınız", "görmelisiniz"]}
                onlar={["yapmalılar", "gelmeliler", "okumalılar", "görmeliler"]}
              />
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="border-l-4 border-purple-500 dark:border-purple-400 pl-6">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
              {language === 'en' ? 'Optative Tense' : 'Dilek-Şart Kipi'}
            </h2>
          </div>
          <Paragraph>
            {language === "en"
              ? "The optative tense in Turkish expresses wishes, desires, or suggestions. It is formed by adding the suffixes "
              : "Türkçede dilek-şart kipi, istek, arzu veya öneri ifade etmek için kullanılır. "}
            <span className="font-semibold">-eyim, -ayım</span>{" "}
            {language === "en"
              ? "to the verb stem for the first person, and similar endings for other persons. It conveys hope or preference."
              : "fiil köküne eklenir ve diğer kişiler için benzer ekler kullanılır. Umut veya tercih ifade eder."}
          </Paragraph>

          <div className="mt-8">
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <ConjugationTable
                tense={language === 'en' ? 'Optative Tense' : 'Dilek-Şart Kipi'}
                ben={["-eyim", "-ayım"]}
                sen={["-esin", "-asın"]}
                o={["-e", "-a"]}
                biz={["-elim", "-alım"]}
                siz={["-esiniz", "-asınız"]}
                onlar={["-eler", "-alar"]}
              />
              <ConjugationTable
                tense={language === 'en' ? 'Example' : 'Örnek'}
                ben={["gideyim", "bakayım", "yapayım", "okuyayım"]}
                sen={["gidesin", "bakasın", "yapasın", "okuyasın"]}
                o={["gide", "baka", "yapa", "okuya"]}
                biz={["gidelim", "bakalım", "yapalım", "okuyalım"]}
                siz={["gidesiniz", "bakasınız", "yapasınız", "okuyasınız"]}
                onlar={["gideler", "bakalar", "yapalar", "okuyalar"]}
              />
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="border-l-4 border-red-500 dark:border-red-400 pl-6">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
              {language === 'en' ? 'Imperative Tense' : 'Emir Kipi'}
            </h2>
          </div>
          <Paragraph>
            {language === "en"
              ? "The imperative tense in Turkish is used to give commands, instructions, or requests. It is straightforward as it often uses the verb stem directly, though suffixes may be added for politeness or to specify the subject."
              : "Türkçede emir kipi, komut vermek, talimat vermek veya rica etmek için kullanılır. Çoğunlukla doğrudan fiil kökü kullanılır, ancak nezaket veya özneyi belirtmek için ekler eklenebilir."}
          </Paragraph>

          <div className="mt-8">
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <ConjugationTable
                tense={language === 'en' ? 'Imperative Tense' : 'Emir Kipi'}
                ben={["(No form)", "(No form)", "(No form)", "(No form)"]}
                sen={["-", "-", "-", "-"]}
                o={["-sin", "-sın", "-sun", "-sün"]}
                biz={["-lim", "-alım", "-alım", "-elim"]}
                siz={["-in", "-ın", "-ın", "-ın"]}
                onlar={["-sinler", "-sınlar", "-sunlar", "-sünler"]}
              />
              <ConjugationTable
                tense={language === 'en' ? 'Example' : 'Örnek'}
                ben={["(No form)", "(No form)", "(No form)", "(No form)"]}
                sen={["git", "bak", "oku", "gör"]}
                o={["gitsin", "baksın", "okusun", "görsün"]}
                biz={["gidelim", "bakalım", "okuyalım", "görelim"]}
                siz={["gidin", "bakın", "okuyun", "görün"]}
                onlar={["gitsinler", "baksınlar", "okusunlar", "görsünler"]}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}