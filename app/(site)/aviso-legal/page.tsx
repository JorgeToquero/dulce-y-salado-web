import type { Metadata } from "next";
import {
  LegalPage,
  LegalSection,
  PendingBadge,
} from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal | Dulce y Salado",
  description:
    "Aviso legal de Dulce y Salado, despacho de pan y bollería de Carmen Hidalgo Sánchez en Torrenueva Costa.",
};

export default function AvisoLegalPage() {
  return (
    <LegalPage
      title="Aviso legal"
      description="Información sobre la titularidad, el uso y los contenidos de este sitio web."
    >
      <LegalSection title="1. Titularidad del sitio web">
        <p>
          Este sitio web pertenece a{" "}
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
            <span
              aria-disabled="true"
              title="Teléfono próximamente"
              className="cursor-not-allowed text-marron/60"
            >
              Teléfono próximamente
            </span>
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

      <LegalSection title="2. Objeto y actividad">
        <p>
          Este sitio web tiene carácter informativo y presenta el despacho de
          pan y bollería Dulce y Salado, sus productos, horario y datos de
          contacto.
        </p>
        <p>
          La web no permite realizar pedidos online, pagos, suscripciones a
          newsletters, registro de usuarios ni dispone de área privada.
        </p>
      </LegalSection>

      <LegalSection title="3. Condiciones de uso">
        <p>
          El acceso al sitio es gratuito. La persona usuaria se compromete a
          utilizarlo de forma diligente, conforme a la ley, la moral y el orden
          público, y a no realizar actuaciones que puedan dañar el sitio, su
          funcionamiento o los derechos de terceros.
        </p>
      </LegalSection>

      <LegalSection title="4. Horario y contenidos">
        <p>
          La información sobre productos y servicios es orientativa y puede
          variar. El horario mostrado en la web es provisional y el horario
          definitivo está pendiente de confirmar <PendingBadge />
        </p>
      </LegalSection>

      <LegalSection title="5. Propiedad intelectual e industrial">
        <p>
          Los textos, el diseño, el logotipo, las imágenes y el resto de
          contenidos del sitio están protegidos por la normativa de propiedad
          intelectual e industrial. No se permite su reproducción,
          distribución, comunicación pública o transformación sin autorización,
          salvo los usos legalmente permitidos.
        </p>
        <p>
          Las imágenes de producto utilizadas actualmente son provisionales y
          podrán sustituirse por material definitivo.
        </p>
      </LegalSection>

      <LegalSection title="6. Enlaces a terceros">
        <p>
          El sitio puede incluir enlaces o servicios de terceros, como Google
          Maps o WhatsApp. El acceso a dichos servicios se rige por sus propias
          condiciones y políticas de privacidad. Dulce y Salado no controla ni
          asume responsabilidad sobre sus contenidos o funcionamiento.
        </p>
      </LegalSection>

      <LegalSection title="7. Responsabilidad">
        <p>
          La titular del sitio adopta medidas razonables para mantener la
          información actualizada y el sitio disponible, pero no garantiza la
          ausencia de errores, interrupciones o incidencias técnicas. La
          información publicada no constituye una oferta comercial vinculante.
        </p>
      </LegalSection>

      <LegalSection title="8. Legislación aplicable">
        <p>
          Este aviso legal se rige por la legislación española. Cualquier
          controversia se someterá a los juzgados y tribunales que resulten
          competentes conforme a la normativa aplicable.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
