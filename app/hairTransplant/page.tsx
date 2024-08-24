import React from 'react';
import Image from 'next/image';

const HairTransplantProcedure: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 text-white p-8 md:p-16">
      <h2 className="text-center text-3xl font-extrabold mb-8">إجراءات عملية زراعة الشعر في تركيا</h2>
      <p className="text-lg leading-relaxed mb-12 max-w-4xl mx-auto">
        تتضمن عملية زراعة الشعر في تركيا عادةً عدة خطوات. أولاً، يجري المريض استشارة طبية مع الطبيب المختص لتحديد مدى
        الحاجة للعملية والخيارات المتاحة. يتم تحديد التصميم الأمثل للمنطقة التي ستزرع فيها الشعر، ويجري تحضير المريض
        للإجراءات التي تتضمن تحضير مناطق المانحة وزراعة البصيلات في المنطقة المستقبلة. يمكن أن تستغرق عملية زراعة الشعر
        في تركيا عادةً من 6 إلى 8 ساعات اعتماداً على مدى الإجراءات. بعد الانتهاء، يتلقى المريض تطبيقات العناية اللازمة بعد
        العملية وينصح بمتابعة طبيب متخصص في تركيا.
      </p>

      <div className="flex flex-col md:flex-row md:space-x-12">
        {/* Left Column */}
        <div className="flex flex-col space-y-10 w-full md:w-1/2">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-6">
              <Image src="/image/chefs-1.jpg" alt="Step 1" width={64} height={64} className="rounded-full border-4 border-white shadow-lg" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">تصميم خط الشعر</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                سيتم تصميم خط الشعر والاتفاق على الشكل قبل يوم إجراء زراعة الشعر في تركيا. سيتم وضع علامات على منطقة الشعر
                لضمان توزيع الشعيرات بشكل متساوي.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mr-6">
              <Image src="/image/chefs-1.jpg" alt="Step 2" width={64} height={64} className="rounded-full border-4 border-white shadow-lg" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">استخراج البصيلات</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                في بعض إجراءات زراعة الشعر في تركيا، قد يكون من الضروري حالة المخاطر المتعلقة باستخدام تقنيات متقدمة مثل
                فحص بصيلات الشعر.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mr-6">
              <Image src="/image/chefs-1.jpg" alt="Step 3" width={64} height={64} className="rounded-full border-4 border-white shadow-lg" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">تحضير مناطق زراعة الشعر</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                سيتم تحضير المناطق المستقبلة حيث سيقوم الجراح بإنشاء ثقوب صغيرة يتم فيها زرع الشعيرات.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-10 w-full md:w-1/2 mt-10 md:mt-0">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-6">
              <Image src="/image/chefs-1.jpg" alt="Step 4" width={64} height={64} className="rounded-full border-4 border-white shadow-lg" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">زرع البصيلات</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                تختلف عملية استخراج البصيلات المستخدمة في زراعة الشعر في تركيا بحسب التقنية المستخدمة. بشكل عام، تتم عملية
                استخراج البصيلات باستخدام أداة مخصصة لخلق الثقب.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mr-6">
              <Image src="/image/chefs-1.jpg" alt="Step 5" width={64} height={64} className="rounded-full border-4 border-white shadow-lg" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">التعقيم والتحضير النهائي</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                بعد استخراج البصيلات من المناطق المانحة، سيتم تعقيم منطقة الزراعة والتحضير النهائي للإجراء.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mr-6">
              <Image src="/image/chefs-1.jpg" alt="Step 6" width={64} height={64} className="rounded-full border-4 border-white shadow-lg" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">زرع الشعر</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                يقوم الجراح بزراعة الشعر في المناطق المجهزة له باستخدام أدوات مخصصة لهذا الغرض.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HairTransplantProcedure;
