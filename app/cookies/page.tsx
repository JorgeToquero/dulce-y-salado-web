import type { Metadata } from "next";
import {
  LegalPage,
  LegalSection,
  PendingBadge,
} from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Política de cookies | Dulce y Salado",
  description:
    "Información sobre las cookies y los servicios de terceros utilizados en la web de Dulce y Salado.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Política de cookies"
      description="Información sobre el uso de cookies y servicios de terceros en este sitio web."
    >
      <LegalSection title="1. ¿Qué son las cookies?">
        <p>
          Las cookies son archivos o tecnologías similares que se almacenan en
          el dispositivo cuando se visita una web y permiten recordar
          información técnica o de uso.
        </p>
      </LegalSection>

      <LegalSection title="2. Cookies utilizadas">
        <p>
          Este sitio web no utiliza cookies propias de analítica, publicidad o
          seguimiento. Tampoco dispone de pedidos online, pagos, newsletter ni
          área de usuario.
        </p>
        <p>
          Pueden existir cookies o registros técnicos estrictamente necesarios
          para el funcionamiento y la seguridad del sitio, generados por el
          proveedor de alojamiento.
        </p>
      </LegalSection>

      <LegalSection title="3. Servicios de terceros">
        <ul className="list-disc space-y-2 pl-5 marker:text-naranja">
          <li>
            <strong className="font-semibold text-marron">Google Maps:</strong>{" "}
            el mapa no se carga automáticamente. Se activa solo al pulsar
            «Cargar mapa». En ese momento, Google puede instalar cookies y tratar
            datos técnicos como la dirección IP, el dispositivo o la navegación.
          </li>
          <li>
            <strong className="font-semibold text-marron">
              WhatsApp/Meta:
            </strong>{" "}
            los enlaces abren WhatsApp en una nueva pestaña. Al usar ese
            servicio, Meta puede tratar datos técnicos y de uso según sus
            políticas. Este sitio no carga cookies de Meta por esos enlaces.
          </li>
          <li>
            <strong className="font-semibold text-marron">Alojamiento:</strong>{" "}
            el proveedor de alojamiento puede generar registros técnicos y
            utilizar cookies estrictamente necesarias para la seguridad y el
            funcionamiento del sitio.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Consentimiento y control">
        <p>
          Las cookies no esenciales no se activan automáticamente. El mapa de
          Google solo se carga después de que pulses el botón correspondiente.
          Puedes volver a la página sin cargarlo o recargarla para restablecer
          el estado inicial.
        </p>
        <p>
          También puedes bloquear o eliminar cookies desde la configuración de
          tu navegador. Si bloqueas cookies técnicas, algunas funciones podrían
          no estar disponibles.
        </p>
      </LegalSection>

      <LegalSection title="5. Actualizaciones">
        <p>
          Esta política puede modificarse si cambian los servicios utilizados o
          la normativa aplicable. La versión vigente será la publicada en esta
          página.
        </p>
      </LegalSection>

      <LegalSection title="6. Contacto">
        <p>
          Para cualquier duda sobre cookies o privacidad, puedes escribir al
          correo de contacto legal. Pendiente de habilitar <PendingBadge />
        </p>
      </LegalSection>
    </LegalPage>
  );
}
