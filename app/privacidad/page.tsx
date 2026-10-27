import type { Metadata } from "next";
import {
  LegalPage,
  LegalSection,
  PendingBadge,
} from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad | Dulce y Salado",
  description:
    "Información sobre el tratamiento de datos personales en la web de Dulce y Salado.",
};

export default function PrivacidadPage() {
  return (
    <LegalPage
      title="Política de privacidad"
      description="Información sobre cómo se tratan los datos personales en este sitio web."
    >
      <LegalSection title="1. Responsable del tratamiento">
        <p>
          El responsable del tratamiento es{" "}
          <strong className="font-semibold text-marron">
            Carmen Hidalgo Sánchez
          </strong>
          , que opera bajo el nombre comercial{" "}
          <strong className="font-semibold text-marron">Dulce y Salado</strong>.
        </p>
        <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-[12rem_1fr]">
          <dt className="font-semibold text-marron">Dirección</dt>
          <dd>{site.address}</dd>
          <dt className="font-semibold text-marron">Teléfono</dt>
          <dd>
            <a
              href={site.phoneHref}
              className="rounded-sm underline underline-offset-4 hover:text-naranja focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marron"
            >
              {site.phoneDisplay}
            </a>
          </dd>
          <dt className="font-semibold text-marron">NIF/CIF</dt>
          <dd className="text-marron/60">
            Pendiente de completar <PendingBadge />
          </dd>
          <dt className="font-semibold text-marron">
            Correo de contacto legal
          </dt>
          <dd className="text-marron/60">
            Pendiente de habilitar <PendingBadge />
          </dd>
        </dl>
      </LegalSection>

      <LegalSection title="2. Datos que se tratan">
        <p>
          Este sitio web no incluye formularios de pedido, pagos online,
          newsletter, área de usuario ni herramientas de analítica.
        </p>
        <p>
          Si contactas por teléfono o WhatsApp, se tratarán los datos que decidas
          facilitar, como el nombre, el número de teléfono y el contenido del
          mensaje, con la finalidad de atender tu consulta o encargo.
        </p>
        <p>
          El alojamiento del sitio puede registrar datos técnicos necesarios
          para su funcionamiento y seguridad, como la dirección IP, la fecha y
          hora de acceso, el navegador utilizado o las páginas solicitadas.
        </p>
        <p>
          La preferencia de consentimiento de cookies se guarda localmente en el
          navegador con la clave{" "}
          <code className="rounded bg-crema px-1.5 py-0.5 text-xs">
            cookie-consent
          </code>
          .
        </p>
      </LegalSection>

      <LegalSection title="3. Servicios de terceros">
        <p>
          La web puede utilizar servicios de terceros que pueden tratar datos
          técnicos:
        </p>
        <ul className="list-disc space-y-2 pl-5 marker:text-naranja">
          <li>
            <strong className="font-semibold text-marron">Google Maps:</strong>{" "}
            el mapa no se carga automáticamente. Se activa si aceptas todas las
            cookies o si pulsas el botón «Cargar mapa». Al hacerlo, Google puede
            tratar datos técnicos y utilizar cookies de terceros.
          </li>
          <li>
            <strong className="font-semibold text-marron">
              WhatsApp/Meta:
            </strong>{" "}
            los botones abren WhatsApp. Si utilizas este canal, Meta puede tratar
            datos técnicos y de uso conforme a sus propias políticas.
          </li>
          <li>
            <strong className="font-semibold text-marron">Alojamiento:</strong>{" "}
            el proveedor que aloja la web puede tratar registros técnicos
            necesarios para prestar el servicio, mantener la seguridad y
            prevenir abusos.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Finalidades y bases jurídicas">
        <ul className="list-disc space-y-2 pl-5 marker:text-naranja">
          <li>
            Atención de consultas y encargos: consentimiento al contactar y,
            cuando corresponda, ejecución de la relación solicitada.
          </li>
          <li>
            Funcionamiento y seguridad del sitio: interés legítimo en mantener
            la web operativa y protegida.
          </li>
          <li>
            Carga del mapa de Google: consentimiento otorgado al aceptar todas
            las cookies o al pulsar el botón de carga.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Conservación de los datos">
        <p>
          Los datos facilitados en consultas o encargos se conservarán durante
          el tiempo necesario para atender la solicitud y, después, durante los
          plazos legales aplicables. Los registros técnicos se conservarán según
          la configuración del proveedor de alojamiento.
        </p>
      </LegalSection>

      <LegalSection title="6. Destinatarios y transferencias">
        <p>
          No se prevén cesiones a terceros salvo obligación legal. Pueden acceder
          a datos técnicos los proveedores de servicios mencionados (alojamiento,
          Google y Meta/WhatsApp) en calidad de encargados o responsables
          independientes, según el caso. Estos proveedores pueden realizar
          transferencias internacionales de datos conforme a sus propias
          garantías y condiciones.
        </p>
      </LegalSection>

      <LegalSection title="7. Derechos de las personas interesadas">
        <p>
          Puedes ejercer tus derechos de acceso, rectificación, supresión,
          oposición, limitación del tratamiento y portabilidad escribiendo al
          correo de contacto legal. Pendiente de habilitar <PendingBadge />
        </p>
        <p>
          También puedes presentar una reclamación ante la Agencia Española de
          Protección de Datos a través de{" "}
          <a
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm font-semibold underline underline-offset-4 hover:text-naranja focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marron"
          >
            www.aepd.es
            <span className="sr-only">
              {" "}
              (se abre en una nueva pestaña)
            </span>
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="8. Seguridad">
        <p>
          Se aplican medidas técnicas y organizativas razonables para proteger
          los datos frente a accesos no autorizados, pérdida o alteración.
        </p>
      </LegalSection>

      <LegalSection title="9. Cambios en esta política">
        <p>
          Esta política puede actualizarse para adaptarla a cambios normativos o
          de funcionamiento. La versión vigente será la publicada en esta
          página.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
