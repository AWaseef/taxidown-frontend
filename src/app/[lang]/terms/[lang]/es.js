import React from 'react'

export default function Es() {
  return (
    <>
    <section className="mt-15 border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white print:hidden">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Términos y Condiciones</h1>
          <p className="mt-3 max-w-3xl text-sm text-gray-600">
            Por favor, lea estos Términos cuidadosamente. Al realizar una reserva o utilizar nuestros servicios, acepta
            estar sujeto a ellos.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-10">
          {/* Sidebar: Table of contents */}
          <aside className="mb-10 lg:mb-0 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:overflow-y-auto print:hidden">
            <nav aria-label="Tabla de contenidos" className="rounded-2xl border border-gray-200 p-4 shadow-sm">
              <h2 className="text-sm font-medium text-gray-800">En esta página</h2>
              <ol className="mt-3 space-y-2 text-sm text-gray-700">
                {[
                  { id: "definitions", label: "1. Definiciones y Alcance" },
                  { id: "booking", label: "2. Proceso de Reserva" },
                  { id: "payment", label: "3. Términos de Pago" },
                  { id: "changes", label: "4. Cambios y Cancelaciones" },
                  { id: "service", label: "5. Estándares de Servicio" },
                  { id: "child", label: "6. Seguridad Infantil y Accesibilidad" },
                  { id: "luggage", label: "7. Política de Equipaje" },
                  { id: "insurance", label: "8. Seguro y Responsabilidad" },
                  { id: "ip", label: "9. Propiedad Intelectual y Uso del Sitio Web" },
                  { id: "privacy", label: "10. Privacidad y Protección de Datos" },
                  { id: "law", label: "11. Ley Aplicable y Jurisdicción" },
                  { id: "contact", label: "12. Datos de Contacto" },
                  { id: "changes-to-terms", label: "13. Cambios en los Términos" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="inline-flex items-start rounded-md px-2 py-1 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Section 1: Definitions and Scope */}
          <div>
            <div className="m-10 text-lg" id="definitions">
              <h2 id="definitions" className="mb-5 text-2xl font-bold text-slate-900 flex items-center gap-4">
                1. Definiciones y Alcance
              </h2>
              <p className="my-3 text-slate-700 leading-relaxed">
                Estos Términos y Condiciones ("Términos") establecen las reglas para todas las reservas realizadas a
                través del sitio web
                <strong> barcelonacitytaxi.com</strong> ("Sitio Web"), que es propiedad y está gestionado por Barcelona
                City Taxi ("nosotros", "nuestro", "nos"). Al realizar una reserva o utilizar nuestros servicios, usted
                reconoce y acepta estos Términos.
              </p>
              <p className="my-3 text-slate-700">Para los propósitos de estos Términos:</p>
              <div className="flex flex-col gap-3">
                <p className="text-slate-700">
                  <strong>Cliente / Pasajero:</strong> La persona o entidad legal que realiza la reserva.
                </p>
                <p className="text-slate-700">
                  <strong>Servicio:</strong> Cualquier transporte terrestre que nosotros o nuestros socios
                  proporcionemos, incluyendo pero no limitado a traslados al aeropuerto, viajes interurbanos, alquiler
                  por horas y arreglos de viaje personalizados.
                </p>
                <p className="text-slate-700">
                  <strong>Categoría de Vehículo:</strong> El nivel de servicio elegido al reservar (ej., Económico,
                  Estándar, Ejecutivo, Primera Clase), no una marca o modelo específico.
                </p>
                <p className="text-slate-700">
                  <strong>Confirmación de Reserva:</strong> El correo electrónico de confirmación enviado después del
                  pago exitoso, que contiene los detalles completos del viaje y sirve como prueba del contrato.
                </p>
              </div>
            </div>

            {/* Section 2: Booking and Reservation Process */}
            <div id="booking" className="m-10 text-lg">
              <h2 id="booking" className="mb-5 text-2xl font-bold text-slate-900 flex items-center gap-4">
                2. Proceso de Reserva
              </h2>
              <h3 id="eligibility" className="mb-2 text-xl font-bold text-slate-900">
                2.1 Elegibilidad
              </h3>
              <p className="my-3 text-slate-700">Para realizar una reserva, el Cliente debe:</p>
              <ul className="list-disc ml-7 text-slate-700">
                <li className="my-3">Tener al menos 18 años de edad.</li>
                <li className="my-3">Proporcionar datos personales precisos y completos.</li>
                <li className="my-3">Tener la autoridad legal para celebrar un acuerdo vinculante.</li>
              </ul>
              <p className="my-3 text-slate-700">
                Nos reservamos el derecho de cancelar cualquier reserva que no cumpla con estos requisitos.
              </p>

              <h3 id="how-to-book" className="my-2 text-xl font-bold text-slate-900">
                2.2 Cómo Reservar
              </h3>
              <p className="my-3 text-slate-700">
                Las reservas se pueden realizar a través de nuestro sistema en línea seguro en el Sitio Web. El Cliente
                debe:
              </p>
              <ul className="list-disc ml-7 text-slate-700">
                <li className="my-3">
                  Elegir el tipo de servicio, categoría de vehículo, puntos de recogida/destino, fecha y hora.
                </li>
                <li className="my-3">
                  Proporcionar datos correctos del pasajero y anotar cualquier requisito especial (ej., asientos para
                  niños, asistencia de movilidad).
                </li>
                <li className="my-3">Revisar la estimación de tarifa y confirmar la reserva realizando el pago.</li>
              </ul>
              <p className="my-3 text-slate-700">
                Las reservas realizadas a través de plataformas de terceros (ej., agencias de viajes, sitios asociados)
                también están sujetas a estos Términos.
              </p>

              <h3 id="confirmation" className="my-2 text-xl font-bold text-slate-900">
                2.3 Confirmación de Reserva
              </h3>
              <p className="my-3 text-slate-700">
                Una reserva se vuelve vinculante solo cuando enviamos el correo electrónico de Confirmación de Reserva
                después de recibir el pago. Esta confirmación incluirá detalles del viaje, resumen de pago e información
                de contacto. Si no podemos proporcionar el servicio solicitado, le informaremos prontamente y emitiremos
                un reembolso completo a través de su método de pago original.
              </p>

              <h3 id="pickup-policy" className="my-2 text-xl font-bold text-slate-900">
                2.4 Política de Aeropuerto y Recogida
              </h3>
              <ul className="list-disc ml-7 text-slate-700">
                <li className="my-3">
                  <strong>Aeropuertos</strong> - 60 minutos de espera gratuita desde la llegada real del vuelo,
                  rastreada en tiempo real.
                </li>
                <li className="my-3">
                  <strong>Hoteles / Direcciones Privadas</strong> - 15 minutos de espera gratuita.
                </li>
                <li className="my-3">
                  <strong>Puertos de Cruceros</strong> - 30 minutos de espera gratuita.
                </li>
              </ul>
              <p className="my-3 text-slate-700">
                Los clientes deben asegurar que sus datos de contacto sean accesibles el día del viaje. Si el pasajero
                no aparece dentro del período de espera y no se establece contacto, la reserva será tratada como no
                presentación y no se dará reembolso.
              </p>
            </div>

            {/* Section 3: Payment Terms */}
            <div id="payment" className="m-10 text-lg">
              <h2 className="mb-5 text-2xl font-bold text-slate-900 flex items-center gap-4">3. Términos de Pago</h2>

              <h3 className="mb-2 text-xl font-bold text-slate-900">3.1 Precios y Estimaciones de Tarifa</h3>
              <p className="my-3 text-slate-700">
                Todos los precios están en Euros (€) e incluyen impuestos aplicables a menos que se indique lo
                contrario. La tarifa mostrada durante la reserva se basa en los detalles proporcionados y puede cambiar
                si la ruta, tiempo de espera, paradas o nivel de servicio cambian.
              </p>

              <h3 className="my-2 text-xl font-bold text-slate-900">3.2 Métodos de Pago Aceptados</h3>
              <p className="my-3 text-slate-700">Aceptamos:</p>
              <ul className="list-disc ml-7 text-slate-700">
                <li className="my-3">Principales tarjetas de crédito/débito (Visa, MasterCard, American Express)</li>
                <li className="my-3">Pasarela de pago segura Stripe</li>
                <li className="my-3">Transferencias bancarias (para reservas corporativas o grupales)</li>
                <li className="my-3">Bizum o PayPal (con acuerdo previo)</li>
              </ul>

              <h3 className="my-2 text-xl font-bold text-slate-900">3.3 Requisitos de Pago</h3>
              <p className="my-3 text-slate-700">
                Se requiere el pago completo para confirmar una reserva a menos que se acuerde lo contrario por escrito.
              </p>

              <h3 className="my-2 text-xl font-bold text-slate-900">3.4 Seguridad de las Transacciones</h3>
              <p className="my-3 text-slate-700">
                Todos los pagos se procesan a través de conexiones encriptadas mediante proveedores seguros de terceros.
                No almacenamos detalles de tarjetas. El manejo de pagos cumple con los estándares PCI-DSS.
              </p>

              <h3 className="my-2 text-xl font-bold text-slate-900">3.5 Facturas</h3>
              <p className="my-3 text-slate-700">
                Un recibo de pago o factura se enviará automáticamente por correo electrónico después de la confirmación
                de reserva. Las empresas pueden solicitar una factura con IVA contactándonos después de la reserva.
              </p>
            </div>

            {/* Section 4: Changes and Cancellations */}
            <div id="changes" className="m-10 text-lg">
              <h2 className="mb-5 text-2xl font-bold text-slate-900 flex items-center gap-4">
                4. Cambios y Cancelaciones
              </h2>

              <h3 className="mb-2 text-xl font-bold text-slate-900">4.1 Cambios de Reserva</h3>
              <p className="my-3 text-slate-700">
                Puede solicitar cambios en la hora de recogida, ubicación, destino, número de pasajeros o servicios
                adicionales hasta 24 horas antes de la recogida. Las solicitudes deben enviarse por escrito (correo
                electrónico o WhatsApp) y son válidas solo una vez confirmadas por nosotros. Pueden aplicarse cargos
                adicionales si el cambio aumenta el tiempo de viaje, distancia o nivel de servicio.
              </p>

              <h3 className="my-2 text-xl font-bold text-slate-900">4.2 Cambios de Último Momento</h3>
              <p className="my-3 text-slate-700">
                Para cambios dentro de las 24 horas de la recogida, contacte directamente a su conductor asignado si
                tiene sus datos. Intentaremos acomodar solicitudes de último momento pero no podemos garantizar la
                aprobación. Pueden aplicarse tarifas adicionales.
              </p>

              <h3 className="my-2 text-xl font-bold text-slate-900">4.3 Política de Cancelación y Reembolso</h3>
              <ul className="list-disc ml-7 text-slate-700">
                <li className="my-3">
                  <strong>Reembolso Completo</strong> - Cancelaciones realizadas al menos 24 horas antes de la recogida.
                </li>
                <li className="my-3">
                  <strong>Sin Reembolso</strong> - Cancelaciones dentro de las 24 horas de la recogida o no
                  presentaciones.
                </li>
              </ul>
              <p className="my-3 text-slate-700">
                Las cancelaciones deben enviarse por correo electrónico o WhatsApp y ser confirmadas por nosotros para
                ser válidas.
              </p>

              <h3 className="my-2 text-xl font-bold text-slate-900">4.4 Fuerza Mayor</h3>
              <p className="my-3 text-slate-700">
                Si el servicio se interrumpe por eventos fuera de nuestro control (ej., clima severo, huelgas,
                disturbios civiles), intentaremos reprogramar o proporcionar un reembolso completo. Para cancelaciones
                de vuelos o retrasos importantes, pueden ofrecerse reembolsos parciales o reprogramación si se nos
                informa prontamente.
              </p>

              <h3 className="my-2 text-xl font-bold text-slate-900">4.5 Procesamiento de Reembolsos</h3>
              <p className="my-3 text-slate-700">
                Los reembolsos se realizarán a través del método de pago original dentro de 7-10 días hábiles. Cualquier
                tarifa del proveedor de pago puede deducirse a menos que la cancelación haya sido culpa nuestra.
              </p>
            </div>

            {/* Section 5: Service Standards */}
            <div id="service" className="m-10 text-lg">
              <h2 className="mb-5 text-2xl font-bold text-slate-900 flex items-center gap-4">
                5. Estándares de Servicio
              </h2>

              <h3 className="mb-2 text-xl font-bold text-slate-900">5.1 Conducta del Conductor</h3>
              <p className="my-3 text-slate-700">
                Todos los conductores son profesionales licenciados, asegurados y capacitados. Se espera que
                proporcionen un servicio seguro, cortés y puntual, incluyendo asistencia razonable con el equipaje.
                Cualquier preocupación sobre la conducta del conductor debe reportarse inmediatamente.
              </p>

              <h3 className="my-2 text-xl font-bold text-slate-900">5.2 Calidad del Vehículo</h3>
              <p className="my-3 text-slate-700">
                Los vehículos se asignan según la categoría reservada y se mantienen limpios, con clima controlado y en
                condiciones de circulación. Las marcas/modelos exactos pueden variar. Podemos mejorar su categoría de
                vehículo sin costo adicional si es necesario.
              </p>

              <h3 className="my-2 text-xl font-bold text-slate-900">5.3 Tiempo de Espera</h3>
              <ul className="list-disc ml-7 text-slate-700">
                <li className="my-3">Aeropuertos - 60 minutos gratuitos desde el tiempo real de aterrizaje.</li>
                <li className="my-3">
                  Otras Recogidas - 15 minutos gratuitos desde la hora programada de recogida. El tiempo de espera
                  adicional puede cobrarse.
                </li>
              </ul>

              <h3 className="my-2 text-xl font-bold text-slate-900">5.4 Retrasos y No Presentaciones</h3>
              <p className="my-3 text-slate-700">
                Si se retrasa, infórmenos a nosotros o a su conductor tan pronto como sea posible. No aparecer sin aviso
                será tratado como no presentación y se cobrará en su totalidad.
              </p>

              <h3 className="my-2 text-xl font-bold text-slate-900">5.5 Equipaje</h3>
              <p className="my-3 text-slate-700">
                Cada pasajero puede traer una maleta estándar y un equipaje de mano. Artículos voluminosos (ej., esquís,
                sillas de ruedas, cochecitos) deben declararse con anticipación. No somos responsables por daños al
                equipaje a menos que sean causados por nuestra negligencia.
              </p>

              <h3 className="my-2 text-xl font-bold text-slate-900">5.6 Mascotas</h3>
              <p className="my-3 text-slate-700">
                Las mascotas están permitidas solo en traslados privados y deben estar en transportadores adecuados.
                Puede aplicarse una tarifa de limpieza si se requiere limpieza adicional.
              </p>
            </div>

            {/* Section 6: Child Safety & Accessibility */}
            <div id="child" className="m-10 text-lg">
              <h2 className="mb-5 text-2xl font-bold text-slate-900 flex items-center gap-4">
                6. Seguridad Infantil y Accesibilidad
              </h2>

              <h3 className="mb-2 text-xl font-bold text-slate-900">6.1 Sistemas de Retención Infantil</h3>
              <p className="my-3 text-slate-700">
                De acuerdo con las regulaciones españolas y de la UE, los niños menores de 135 cm o 12 años deben usar
                un asiento infantil apropiado. Podemos proporcionar:
              </p>
              <ul className="list-disc ml-7 text-slate-700">
                <li className="my-3">Asientos para bebés (0-13 kg)</li>
                <li className="my-3">Asientos para niños (9-18 kg)</li>
                <li className="my-3">Asientos elevadores (15-36 kg)</li>
              </ul>
              <p className="my-3 text-slate-700">
                Los asientos deben solicitarse al reservar para asegurar disponibilidad.
              </p>

              <h3 className="my-2 text-xl font-bold text-slate-900">6.2 Responsabilidad de Instalación</h3>
              <p className="my-3 text-slate-700">
                Los conductores pueden ayudar con la instalación, pero los padres/tutores son responsables de asegurar
                el ajuste correcto. Si un asiento adecuado no está disponible y el viaje procede sin él, el pasajero
                acepta la responsabilidad completa.
              </p>

              <h3 className="my-2 text-xl font-bold text-slate-900">6.3 Accesibilidad</h3>
              <p className="my-3 text-slate-700">
                Ofrecemos vehículos adecuados para sillas de ruedas plegables y ayudas de movilidad. Los vehículos
                completamente accesibles para sillas de ruedas deben solicitarse con anticipación y están sujetos a
                disponibilidad. Por favor infórmenos durante la reserva si se requiere asistencia para abordar o salir
                del vehículo.
              </p>
            </div>

            {/* Section 7: Luggage Policy */}
            <div id="luggage" className="m-10 text-lg">
              <h2 className="mb-5 text-2xl font-bold text-slate-900 flex items-center gap-4">
                7. Política de Equipaje
              </h2>

              <h3 className="mb-2 text-xl font-bold text-slate-900">7.1 Asignación Estándar</h3>
              <p className="my-3 text-slate-700">
                Cada pasajero tiene derecho a traer una maleta de tamaño mediano (hasta 23 kg) y un artículo personal
                pequeño (como un bolso o mochila) por reserva. Si necesita espacio adicional para equipaje, por favor
                infórmenos durante el proceso de reserva para que podamos asignar un vehículo adecuado.
              </p>

              <h3 className="my-2 text-xl font-bold text-slate-900">7.2 Artículos de Tamaño Excesivo o Adicionales</h3>
              <p className="my-3 text-slate-700">
                Podemos transportar artículos más grandes—como esquís, palos de golf, cochecitos o sillas de ruedas—si
                se notifica con anticipación. Si el equipaje adicional o de tamaño excesivo no se declara previamente,
                esto puede resultar en:
              </p>
              <ul className="list-disc ml-7 text-slate-700">
                <li className="my-3">Actualización a un vehículo más grande (sujeto a disponibilidad)</li>
                <li className="my-3">Cargos adicionales de manejo o capacidad</li>
                <li className="my-3">
                  En casos raros, cancelación sin reembolso si los artículos no pueden acomodarse de manera segura
                </li>
              </ul>

              <h3 className="my-2 text-xl font-bold text-slate-900">7.3 Artículos No Permitidos</h3>
              <p className="my-3 text-slate-700">
                Por razones de seguridad y legales, lo siguiente está estrictamente prohibido tanto en equipaje
                facturado como de mano:
              </p>
              <ul className="list-disc ml-7 text-slate-700">
                <li className="my-3">Sustancias peligrosas (ej., explosivos, líquidos inflamables)</li>
                <li className="my-3">Bienes ilegales o contrabando</li>
                <li className="my-3">Armas o armas de fuego</li>
                <li className="my-3">
                  Artículos que probablemente dañen el vehículo o incomoden a otros pasajeros (ej., comida descubierta,
                  olores fuertes)
                </li>
              </ul>

              <h3 className="my-2 text-xl font-bold text-slate-900">7.4 Responsabilidad del Pasajero</h3>
              <p className="my-3 text-slate-700">
                Usted es responsable de sus pertenencias en todo momento. No somos responsables por:
              </p>
              <ul className="list-disc ml-7 text-slate-700">
                <li className="my-3">Pérdida o robo de artículos personales durante el viaje</li>
                <li className="my-3">Daño a bienes frágiles, perecederos o mal empacados</li>
              </ul>
              <p className="my-3 text-slate-700">
                Recomendamos contratar un seguro de viaje que cubra pérdida, robo o daño a la propiedad personal.
              </p>
            </div>

            {/* Section 8: Insurance and Liability */}
            <div id="insurance" className="m-10 text-lg">
              <h2 className="mb-5 text-2xl font-bold text-slate-900 flex items-center gap-4">
                8. Seguro y Responsabilidad
              </h2>

              <h3 className="mb-2 text-xl font-bold text-slate-900">8.1 Seguro de Viaje</h3>
              <p className="my-3 text-slate-700">
                Recomendamos encarecidamente a los pasajeros que contraten un seguro de viaje adecuado antes de su
                viaje. Esto debe cubrir eventos inesperados como cancelaciones, retrasos, accidentes, problemas médicos
                o pérdida/daño al equipaje. No somos responsables por costos derivados de circunstancias fuera de
                nuestro control.
              </p>

              <h3 className="my-2 text-xl font-bold text-slate-900">8.2 Limitación de Responsabilidad</h3>
              <p className="my-3 text-slate-700">
                No somos responsables por pérdidas indirectas o consecuenciales, incluyendo vuelos perdidos o ingresos
                perdidos. Nuestra responsabilidad máxima está limitada al monto pagado por el servicio reservado. No
                somos responsables por retrasos causados por tráfico, clima, eventos de fuerza mayor o acciones de
                terceros.
              </p>

              <h3 className="my-2 text-xl font-bold text-slate-900">8.3 Fuerza Mayor</h3>
              <p className="my-3 text-slate-700">
                No aceptamos responsabilidad por interrupciones causadas por eventos fuera de nuestro control,
                incluyendo desastres naturales, huelgas, pandemias, guerra, restricciones gubernamentales o incidentes
                de tráfico importantes. En tales casos, haremos esfuerzos razonables para reprogramar o reembolsar la
                reserva.
              </p>
            </div>

            {/* Section 9: Intellectual Property and Website Use */}
            <div id="ip" className="m-10 text-lg">
              <h2 className="mb-5 text-2xl font-bold text-slate-900 flex items-center gap-4">
                9. Propiedad Intelectual y Uso del Sitio Web
              </h2>

              <h3 className="mb-2 text-xl font-bold text-slate-900">9.1 Contenido del Sitio Web</h3>
              <p className="my-3 text-slate-700">
                Todos los materiales en nuestro sitio web—incluyendo texto, imágenes, logotipos, iconos y videos—son
                propiedad nuestra o de nuestros proveedores de contenido. No puede copiar, distribuir, modificar o
                publicar ningún contenido sin consentimiento previo por escrito. Para solicitudes de permisos, contacte
                info@barcelonacitytaxi.com.
              </p>

              <h3 className="my-2 text-xl font-bold text-slate-900">9.2 Marcas Comerciales</h3>
              <p className="my-3 text-slate-700">
                Nuestro nombre, logotipo y marca asociada son marcas comerciales protegidas. El uso no autorizado puede
                resultar en acción legal. Las pautas de uso de marca están disponibles bajo solicitud.
              </p>

              <h3 className="my-2 text-xl font-bold text-slate-900">9.3 Uso Aceptable</h3>
              <p className="my-3 text-slate-700">
                Usted acepta no hacer mal uso de nuestro sitio web, incluyendo intentar acceso no autorizado, cargar
                código dañino o participar en actividades ilegales o fraudulentas.
              </p>

              <h3 className="my-2 text-xl font-bold text-slate-900">9.4 Activos de Terceros</h3>
              <p className="my-3 text-slate-700">
                Algunos elementos del sitio web (ej., iconos, fuentes, scripts, imágenes) están licenciados de terceros
                y siguen siendo propiedad de sus respectivos propietarios. Estos se usan de acuerdo con sus términos de
                licencia.
              </p>
            </div>

            {/* Section 10: Privacy and Data Protection */}
            <div id="privacy" className="m-10 text-lg">
              <h2 className="mb-5 text-2xl font-bold text-slate-900 flex items-center gap-4">
                10. Privacidad y Protección de Datos
              </h2>

              <h3 className="mb-2 text-xl font-bold text-slate-900">10.1 Cumplimiento</h3>
              <p className="my-3 text-slate-700">
                Cumplimos con el Reglamento General de Protección de Datos (RGPD) y otras leyes de privacidad
                aplicables. Los datos personales se recopilan, almacenan y procesan solo para entregar nuestros
                servicios, mejorar la experiencia del usuario y cumplir obligaciones legales.
              </p>

              <h3 className="my-2 text-xl font-bold text-slate-900">10.2 Manejo de Datos</h3>
              <p className="my-3 text-slate-700">
                Podemos recopilar su nombre, datos de contacto, información de viaje y datos de pago. Esta información
                se comparte solo con proveedores de servicios directamente involucrados en cumplir su reserva (ej.,
                conductores, procesadores de pago). Nunca vendemos o intercambiamos sus datos personales.
              </p>

              <h3 className="my-2 text-xl font-bold text-slate-900">10.3 Sus Derechos</h3>
              <p className="my-3 text-slate-700">Bajo el RGPD, usted tiene derecho a:</p>
              <ul className="list-disc ml-7 text-slate-700">
                <li className="my-3">Acceder a los datos que tenemos sobre usted</li>
                <li className="my-3">Solicitar correcciones a datos inexactos o incompletos</li>
                <li className="my-3">Solicitar eliminación de sus datos ("derecho al olvido")</li>
                <li className="my-3">Retirar el consentimiento para el procesamiento de datos</li>
              </ul>
              <p className="my-3 text-slate-700">
                Para ejercer estos derechos, contacte info@barcelonacitytaxi.com. Vea nuestra Política de Privacidad
                para más detalles.
              </p>

              <h3 className="my-2 text-xl font-bold text-slate-900">10.4 Cookies</h3>
              <p className="my-3 text-slate-700">
                Nuestro sitio usa cookies y herramientas similares para mejorar la funcionalidad, personalizar servicios
                y analizar tráfico. En línea con el RGPD y la Ley de Mercados Digitales de la UE, usamos una herramienta
                de gestión de consentimiento (CookieYes) que le permite:
              </p>
              <ul className="list-disc ml-7 text-slate-700">
                <li className="my-3">Elegir qué cookies permitir (ej., esenciales, analíticas, marketing)</li>
                <li className="my-3">Cambiar o retirar el consentimiento en cualquier momento</li>
              </ul>
              <p className="my-3 text-slate-700">
                Los detalles completos están disponibles en nuestra Política de Cookies.
              </p>
            </div>

            {/* Section 11: Governing Law and Jurisdiction */}
            <div id="law" className="m-10 text-lg">
              <h2 className="mb-5 text-2xl font-bold text-slate-900 flex items-center gap-4">
                11. Ley Aplicable y Jurisdicción
              </h2>
              <p className="my-3 text-slate-700">
                Estos Términos se rigen por la ley española. Cualquier disputa será manejada exclusivamente por los
                tribunales de Barcelona, España. Al usar nuestros servicios, usted acepta esta jurisdicción.
              </p>
            </div>

            {/* Section 12: Contact Details */}
            <div id="contact" className="m-10 text-lg">
              <h2 className="mb-5 text-2xl font-bold text-slate-900 flex items-center gap-4">12. Datos de Contacto</h2>
              <p className="my-3 text-slate-700">
                Para preguntas, inquietudes o solicitudes sobre estos Términos, nuestros servicios o sus datos
                personales, por favor contáctenos. Nuestro equipo de atención al cliente tiene como objetivo responder
                dentro de 24 horas hábiles.
              </p>
            </div>

            {/* Section 13: Changes to Terms */}
            <div id="changes-to-terms" className="m-10 text-lg">
              <h2 className="mb-5 text-2xl font-bold text-slate-900 flex items-center gap-4">
                13. Cambios en los Términos
              </h2>
              <p className="my-3 text-slate-700">
                Podemos actualizar estos Términos en cualquier momento sin aviso previo. Los cambios entran en vigor
                inmediatamente después de la publicación a menos que se indique lo contrario. Es su responsabilidad
                revisar los Términos periódicamente. El uso continuado de nuestros servicios después de las
                actualizaciones indica aceptación de los Términos revisados.
              </p>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}
