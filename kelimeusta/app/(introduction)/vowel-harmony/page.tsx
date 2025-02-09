"use client";

import { BlockedChars, Paragraph } from "@/components/ui/paragraphs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { useLanguage } from "@/hooks/useLanguage";

export default function VowelHarmony() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen container mx-auto px-8 py-24">
      <div className="w-full md:w-[70rem] mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-center text-purple-600 dark:text-purple-400">
            {language === "en" ? "Vowel Harmony" : "Ünlü Uyumu"}
          </h1>
          <Paragraph>
            {language === "en"
              ? "In Turkish, vowel harmony is a phonological rule that ensures that vowels within a word agree with each other in terms of certain features. It makes words sound smoother and easier to pronounce. When adding suffixes, the vowel in the suffix must harmonize with the vowels in the root word."
              : "Türkçede ünlü uyumu, kelimelerdeki ünlülerin belirli özellikler açısından birbirleriyle uyumlu olmasını sağlayan bir sesbilimsel kuraldır. Kelimelerin daha akıcı ve telaffuzu daha kolay olmasını sağlar. Ekler eklenirken ekteki ünlü, kök kelimenin ünlüleriyle uyum sağlamalıdır."}
          </Paragraph>
        </div>

        {/* Categories of Turkish Vowels */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {language === "en" ? "Categories of Vowels" : "Ünlülerin Kategorileri"}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Front vs Back Vowels */}
            <div className="space-y-6 p-6 rounded-lg bg-gray-50 dark:bg-gray-800/50">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                  {language === "en" ? "1. Front vs. Back Vowels" : "1. Ön ve Arka Ünlüler"}
                </h3>
                <Paragraph>
                  {language === "en"
                    ? "This distinction is based on the position of the tongue during pronunciation. Front vowels are pronounced with the front part of the tongue, while back vowels are pronounced with the back part of the tongue." : "Bu ayrım, telaffuz sırasında dilin konumuna dayanır. Ön ünlüler dilin ön kısmıyla, arka ünlüler ise dilin arka kısmıyla telaffuz edilir."}
                </Paragraph>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {/* Front Vowels */}
                <div className="p-4 rounded-md">
                  <h4 className="font-medium text-lg mb-2 text-purple-500 dark:text-purple-300">
                    {language === "en" ? "Front Vowels (İnce Sesli)" : "İnce Ünlüler"}
                  </h4>
                  <div className="space-y-3">
                    <div className="text-2xl font-medium tracking-wide">
                      {["e", "i", "ö", "ü"].map(e => (
                        <BlockedChars key={e}>{e}</BlockedChars>
                      ))}
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                      <li>elma &#40;apple&#41;</li>
                      <li>içmek &#40;to drink&#41;</li>
                      <li>önce &#40;before&#41;</li>
                      <li>üzüm &#40;grape&#41;</li>
                    </ul>
                  </div>
                </div>

                {/* Back Vowels */}
                <div className="p-4 rounded-md">
                  <h4 className="font-medium text-lg mb-2 text-purple-500 dark:text-purple-300">
                    {language === "en" ? "Back Vowels (Kalın Sesli)" : "Kalın Ünlüler"}
                  </h4>
                  <div className="space-y-3">
                    <div className="text-2xl font-medium tracking-wide">
                      {["a", "ı", "o", "u"].map(e => (
                        <BlockedChars key={e}>{e}</BlockedChars>
                      ))}
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                      <li>araba &#40;car&#41;</li>
                      <li>ıhlamur &#40;linden tree&#41;</li>
                      <li>okul &#40;school&#41;</li>
                      <li>umut &#40;hope&#41;</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Rounded vs Unrounded Vowels */}
            <div className="space-y-6 p-6 rounded-lg bg-gray-50 dark:bg-gray-800/50">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                  {language === "en" ? "2. Rounded vs. Unrounded Vowels" : "2. Yuvarlak ve Düz Ünlüler"}
                </h3>
                <Paragraph>
                  {language === "en"
                    ? "This distinction is based on the shape of the lips during pronunciation. Rounded vowels are pronounced with rounded lips, while unrounded vowels are pronounced with unrounded lips." : "Bu ayrım, telaffuz sırasındaki dudak şekline dayanır. Yuvarlak ünlüler yuvarlanmış dudaklarla telaffuz edilirken, düz ünlüler düz dudaklarla telaffuz edilir."}
                </Paragraph>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {/* Rounded Vowels */}
                <div className="p-4 rounded-md">
                  <h4 className="font-medium text-lg mb-2 text-purple-500 dark:text-purple-300">
                    {language === "en" ? "Rounded Vowels (Yuvarlak Sesli)" : "Yuvarlak Ünlüler"}
                  </h4>
                  <div className="space-y-3">
                    <div className="text-2xl font-medium tracking-wide">
                      {["o", "ö", "u", "ü"].map(e => (
                        <BlockedChars key={e}>{e}</BlockedChars>
                      ))}
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                      <li>okul &#40;school&#41;</li>
                      <li>önce &#40;before&#41;</li>
                      <li>umut &#40;hope&#41;</li>
                      <li>üzüm &#40;grape&#41;</li>
                    </ul>
                  </div>
                </div>

                {/* Unrounded Vowels */}
                <div className="p-4 rounded-md">
                  <h4 className="font-medium text-lg mb-2 text-purple-500 dark:text-purple-300">
                    {language === "en" ? "Unrounded Vowels (Düz Sesli)" : "Düz Ünlüler"}
                  </h4>
                  <div className="space-y-3">
                    <div className="text-2xl font-medium tracking-wide">
                      {["a", "e", "ı", "i"].map(e => (
                        <BlockedChars key={e}>{e}</BlockedChars>
                      ))}
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                      <li>araba &#40;car&#41;</li>
                      <li>elma &#40;apple&#41;</li>
                      <li>ıhlamur &#40;linden tree&#41;</li>
                      <li>içmek &#40;to drink&#41;</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* rule of vowel harmony */}
        <section className="space-y-2">
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {language === "en" ? "Rules of Vowel Harmony" : "Ünlü Uyumu Kuralı"}
          </h2>

          <Paragraph>
            {language === "en"
              ? "There are two main types of vowel harmony in Turkish:"
              : "Türkçede iki ana ünlü uyumu türü vardır:"}
          </Paragraph>

          {/* 4-Way Vowel Harmony */}
          <div className="space-y-4 p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                {language === "en" ? "1. The 4-Way Vowel Harmony" : "1. Dörtlü Ünlü Uyumu"}
              </h3>
              <Paragraph>
                {language === "en"
                  ? "This governs the choice of vowels in suffixes according to the front vs. back vowel distinction."
                  : "Bu, öndeki ve arkadaki ünlü ayrımına göre eklerdeki ünlülerin seçimini yönetir."}
              </Paragraph>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-lg text-purple-500 dark:text-purple-300">
                {language === "en" ? "Rule:" : "Kural:"}
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  {language === "en"
                    ? "If the root word has a front vowel (e, i, ö, ü), the suffix will contain a front vowel."
                    : "Kök kelimede ön ünlü varsa (e, i, ö, ü), ek de ön ünlü içerir."}
                </li>
                <li>
                  {language === "en"
                    ? "If the root word has a back vowel (a, ı, o, u), the suffix will contain a back vowel."
                    : "Kök kelimede arka ünlü varsa (a, ı, o, u), ek de arka ünlü içerir."}
                </li>
              </ul>

              <div className="mt-4">
                <h4 className="font-medium text-lg mb-3 text-purple-500 dark:text-purple-300">
                  {language === "en" ? "Examples:" : "Örnekler:"}
                </h4>
                <Table className="max-w-sm border border-gray-200 dark:border-gray-700">
                  <TableHeader className="bg-gray-100 dark:bg-gray-900">
                    <TableRow>
                      <TableHead>{language === "en" ? "Root Word" : "Kök Kelime"}</TableHead>
                      <TableHead>{language === "en" ? "Suffix (-e/-a)" : "Ek (-e/-a)"}</TableHead>
                      <TableHead>{language === "en" ? "Result" : "Sonuç"}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>ev &#40;house&#41;</TableCell>
                      <TableCell>-e</TableCell>
                      <TableCell>eve &#40;to the house&#41;</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>okul &#40;school&#41;</TableCell>
                      <TableCell>-a</TableCell>
                      <TableCell>okula &#40;to the school&#41;</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          {/* 2-Way Vowel Harmony */}
          <div className="space-y-4 p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                {language === "en" ? "2. The 2-Way Vowel Harmony" : "2. İkili Ünlü Uyumu"}
              </h3>
              <Paragraph>
                {language === "en"
                  ? "This governs the choice of vowels in suffixes according to the rounded vs. unrounded distinction."
                  : "Bu, yuvarlak ve düz ünlü ayrımına göre eklerdeki ünlülerin seçimini yönetir."}
              </Paragraph>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-lg text-purple-500 dark:text-purple-300">
                {language === "en" ? "Rule:" : "Kural:"}
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  {language === "en"
                    ? "If the root word ends in a rounded vowel (o, ö, u, ü), the suffix will contain a rounded vowel."
                    : "Kök kelime yuvarlak ünlü ile bitiyorsa (o, ö, u, ü), ek de yuvarlak ünlü içerir."}
                </li>
                <li>
                  {language === "en"
                    ? "If the root word ends in an unrounded vowel (a, e, ı, i), the suffix will contain an unrounded vowel."
                    : "Kök kelime düz ünlü ile bitiyorsa (a, e, ı, i), ek de düz ünlü içerir."}
                </li>
              </ul>

              <div className="mt-4">
                <h4 className="font-medium text-lg mb-3 text-purple-500 dark:text-purple-300">
                  {language === "en" ? "Examples:" : "Örnekler:"}
                </h4>
                <Table className="max-w-sm border border-gray-200 dark:border-gray-700">
                  <TableHeader className="bg-gray-100 dark:bg-gray-900">
                    <TableRow>
                      <TableHead>{language === "en" ? "Root Word" : "Kök Kelime"}</TableHead>
                      <TableHead>{language === "en" ? "Suffix (-ın/-un/-ün)" : "Ek (-ın/-un/-ün)"}</TableHead>
                      <TableHead>{language === "en" ? "Result" : "Sonuç"}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>kol &#40;arm&#41;</TableCell>
                      <TableCell>-un</TableCell>
                      <TableCell>kolun &#40;your arm&#41;</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>el &#40;hand&#41;</TableCell>
                      <TableCell>-in</TableCell>
                      <TableCell>elin &#40;your hand&#41;</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Applications */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {language === "en" ? "Practical Applications of Vowel Harmony" : "Ünlü Uyumunun Pratik Uygulamaları"}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Case Endings */}
            <div className="space-y-2 p-6 rounded-lg bg-gray-100 dark:bg-gray-800/50 border-t-4 border-purple-600 dark:border-purple-400 shadow-sm dark:shadow-none cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                {language === "en" ? "Case Endings" : "Durum Ekleri"}
              </h3>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="font-medium">
                    {language === "en" ? "Dative (-e/-a):" : "Yönelme (-e/-a):"}
                  </div>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>kitaba &#40;to the book&#41;</li>
                    <li>deftere &#40;to the notebook&#41;</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">
                    {language === "en" ? "Locative (-de/-da):" : "Bulunma (-de/-da):"}
                  </div>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>evde &#40;at home&#41;</li>
                    <li>okulda &#40;at school&#41;</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Possessive Suffixes */}
            <div className="space-y-2 p-6 rounded-lg bg-gray-100 dark:bg-gray-800/50 border-t-4 border-purple-600 dark:border-purple-400 shadow-sm dark:shadow-none cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                {language === "en" ? "Possessive Suffixes" : "İyelik Ekleri"}
              </h3>
              <div className="space-y-2">
                <div className="font-medium">
                  {language === "en" ? "1st Person (-im/-ım/-üm/-um):" : "1. Tekil Şahıs (-im/-ım/-üm/-um):"}
                </div>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>evim &#40;my house&#41;</li>
                  <li>kapım &#40;my door&#41;</li>
                  <li>gözüm &#40;my eye&#41;</li>
                </ul>
              </div>
            </div>

            {/* Verb Conjugations */}
            <div className="space-y-2 p-6 rounded-lg bg-gray-100 dark:bg-gray-800/50 border-t-4 border-purple-600 dark:border-purple-400 shadow-sm dark:shadow-none cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                {language === "en" ? "Verb Conjugations" : "Fiil Çekimleri"}
              </h3>
              <div className="space-y-2">
                <div className="font-medium">
                  {language === "en" ? "Present (-iyor/-ıyor/-üyor/-uyor):" : "Şimdiki Zaman (-iyor/-ıyor/-üyor/-uyor):"}
                </div>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>geliyor &#40;coming&#41;</li>
                  <li>gidiyor &#40;going&#41;</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Exceptions */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {language === "en" ? "Exceptions to Vowel Harmony" : "Ünlü Uyumu İstisnaları"}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Loanwords */}
            <div className="space-y-2 p-6 rounded-lg bg-gray-100 dark:bg-gray-800/50 border-t-4 border-purple-600 dark:border-purple-400 shadow-sm dark:shadow-none cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                {language === "en" ? "Loanwords" : "Alıntı Kelimeler"}
              </h3>
              <Paragraph>
                {language === "en"
                  ? "Words borrowed from other languages may not follow vowel harmony rules."
                  : "Başka dillerden alınan kelimeler ünlü uyumu kurallarına uymayabilir."}
              </Paragraph>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>televizyon &#40;television&#41;</li>
                <li>proje &#40;project&#41;</li>
              </ul>
            </div>

            {/* Compound Words */}
            <div className="space-y-2 p-6 rounded-lg bg-gray-100 dark:bg-gray-800/50 border-t-4 border-purple-600 dark:border-purple-400 shadow-sm dark:shadow-none cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                {language === "en" ? "Compound Words" : "Birleşik Kelimeler"}
              </h3>
              <Paragraph>
                {language === "en"
                  ? "Some compound words may break vowel harmony."
                  : "Bazı birleşik kelimeler ünlü uyumunu bozabilir."}
              </Paragraph>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>hanımeli &#40;honeysuckle&#41;</li>
                <li>ayakkabı &#40;shoe&#41;</li>
              </ul>
            </div>

            {/* Irregular Suffixes */}
            <div className="space-y-2 p-6 rounded-lg bg-gray-100 dark:bg-gray-800/50 border-t-4 border-purple-600 dark:border-purple-400 shadow-sm dark:shadow-none cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                {language === "en" ? "Irregular Suffixes" : "Düzensiz Ekler"}
              </h3>
              <Paragraph>
                {language === "en"
                  ? "Some suffixes may not always obey vowel harmony."
                  : "Bazı ekler her zaman ünlü uyumuna uymayabilir."}
              </Paragraph>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Geldin mi? &#40;Did you come&#41;</li>
                <li>O'nun evi &#40;His/her house&#41;</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Importance */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {language === "en" ? "Why Is Vowel Harmony Important?" : "Ünlü Uyumu Neden Önemlidir?"}
          </h2>

          <div className="px-3">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 mt-2 rounded-full bg-purple-600"></div>
                <Paragraph>
                  {language === "en"
                    ? "It simplifies pronunciation and maintains consistency in the language."
                    : "Telaffuzu basitleştirir ve dilde tutarlılığı sağlar."}
                </Paragraph>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 mt-2 rounded-full bg-purple-600"></div>
                <Paragraph>
                  {language === "en"
                    ? "It makes Turkish easier to learn once the rules are internalized."
                    : "Kurallar içselleştirildiğinde Türkçe'yi öğrenmeyi kolaylaştırır."}
                </Paragraph>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 mt-2 rounded-full bg-purple-600"></div>
                <Paragraph>
                  {language === "en"
                    ? "It plays a key role in building complex sentences correctly."
                    : "Karmaşık cümlelerin doğru kurulmasında önemli bir rol oynar."}
                </Paragraph>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}