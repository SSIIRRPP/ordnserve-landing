import { useContext } from "react";
import { Container } from "react-bootstrap";
import style from "./style.module.scss";
import Link from "../../components/Link";
import ThemeContext from "../../contexts/ThemeContext";

const Legal = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main
      className="Legal__container"
      style={{
        padding: "1.5rem 0",
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      <Container className={style["Legal"]}>
        <p>
          <span className={style["Legal__paragraph"]}>
            1. DATOS IDENTIFICATIVOS
          </span>
        </p>
        <p>
          En cumplimiento con el deber de información recogido en artículo 10 de
          la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
          Información y del Comercio Electrónico, a continuación se reflejan los
          siguientes datos: la empresa titular de dominio web es ORDNSERVE INC.
          (en adelante ORDNSERVE), con domicilio a estos efectos en Madrid
          número de C.I.F.: CIF inscrita en el Registro Mercantil de Madrid.
          Correo electrónico de contacto: info@ordnserve.com del sitio web.
        </p>
        <p>
          <span className={style["Legal__paragraph"]}>2. USUARIOS</span>
        </p>
        <p>
          <span className={style["Legal__paragraph"]}>
            El acceso y/o uso de este portal de ORDNSERVE atribuye la condición
            de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones
            Generales de Uso aquí reflejadas. Las citadas Condiciones serán de
            aplicación independientemente de las Condiciones Generales de
            Contratación que en su caso resulten de obligado cumplimiento.
          </span>
        </p>
        <p>3. USO DEL PORTAL</p>
        <p>
          www.ordnserve.com proporciona el acceso a multitud de informaciones,
          servicios, programas o datos (en adelante, «los contenidos») en
          Internet pertenecientes a ORDNSERVE o a sus licenciantes a los que el
          USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del
          uso del portal. Dicha responsabilidad se extiende al registro que
          fuese necesario para acceder a determinados servicios o contenidos. En
          dicho registro el USUARIO será responsable de aportar información
          veraz y lícita. Como consecuencia de este registro, al USUARIO se le
          puede proporcionar una contraseña de la que será responsable,
          comprometiéndose a hacer un uso diligente y confidencial de la misma.
          El USUARIO se compromete a hacer un uso adecuado de los contenidos y
          servicios (como por ejemplo servicios de chat, foros de discusión o
          grupos de noticias) que Nombre de la empresa creadora del sitio web
          ofrece a través de su portal y con carácter enunciativo pero no
          limitativo, a no emplearlos para (i) incurrir en actividades ilícitas,
          ilegales o contrarias a la buena fe y al orden público; (ii) difundir
          contenidos o propaganda de carácter racista, xenófobo,
          pornográfico-ilegal, de apología del terrorismo o atentatorio contra
          los derechos humanos; (iii) provocar daños en los sistemas físicos y
          lógicos de Nombre de la empresa creadora del sitio web , de sus
          proveedores o de terceras personas, introducir o difundir en la red
          virus informáticos o cualesquiera otros sistemas físicos o lógicos que
          sean susceptibles de provocar los daños anteriormente mencionados;
          (iv) intentar acceder y, en su caso, utilizar las cuentas de correo
          electrónico de otros usuarios y modificar o manipular sus mensajes.
          Nombre de la empresa creadora del sitio web se reserva el derecho de
          retirar todos aquellos comentarios y aportaciones que vulneren el
          respeto a la dignidad de la persona, que sean discriminatorios,
          xenófobos, racistas, pornográficos, que atenten contra la juventud o
          la infancia, el orden o la seguridad pública o que, a su juicio, no
          resultaran adecuados para su publicación. En cualquier caso, ORDNSERVE
          no será responsable de las opiniones vertidas por los usuarios a
          través de los foros, chats, u otras herramientas de participación.
        </p>
        <p>
          <span className={style["Legal__paragraph"]}>&nbsp;</span>
          <span className={style["Legal__paragraph"]}>
            4. PROTECCIÓN DE DATOS
          </span>
        </p>
        <p>
          ORDNSERVE cumple con las directrices de la Ley Orgánica 15/1999 de 13
          de diciembre de Protección de Datos de Carácter Personal, el Real
          Decreto 1720/2007 de 21 de diciembre por el que se aprueba el
          Reglamento de desarrollo de la Ley Orgánica y demás normativa vigente
          en cada momento, y vela por garantizar un correcto uso y tratamiento
          de los datos personales del usuario. Para ello, junto a cada
          formulario de recabo de datos de carácter personal, en los servicios
          que el usuario pueda solicitar a acippia@acippia.org, hará saber al
          usuario de la existencia y aceptación de las condiciones particulares
          del tratamiento de sus datos en cada caso, informándole de la
          responsabilidad del fichero creado, la dirección del responsable, la
          posibilidad de ejercer sus derechos de acceso, rectificación,
          cancelación u oposición, la finalidad del tratamiento y las
          comunicaciones de datos a terceros en su caso. Asimismo, ORDNSERVE
          informa que da cumplimiento a la Ley 34/2002 de 11 de julio, de
          Servicios de la Sociedad de la Información y el Comercio Electrónico y
          le solicitará su consentimiento al tratamiento de su correo
          electrónico con fines comerciales en cada momento.
        </p>
        <p>
          &nbsp;
          <span className={style["Legal__paragraph"]}>
            5. PROPIEDAD INTELECTUAL E INDUSTRIAL
          </span>
        </p>
        <p>
          ORDNSERVE por sí o como cesionaria, es titular de todos los derechos
          de propiedad intelectual e industrial desu página web, así como de los
          elementos contenidos en la misma (a título enunciativo, imágenes,
          sonido, audio, vídeo, software o textos; marcas o logotipos,
          combinaciones de colores, estructura y diseño, selección de materiales
          usados, programas de ordenador necesarios para su funcionamiento,
          acceso y uso, etc.), titularidad de ORDNSERVE o bien de sus
          licenciantes.&nbsp;
          <span className={style["Legal__paragraph"]}>
            Todos los derechos reservados. En virtud de lo dispuesto en los
            artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad
            Intelectual, quedan expresamente prohibidas la reproducción, la
            distribución y la comunicación pública, incluida su modalidad de
            puesta a disposición, de la totalidad o parte de los contenidos de
            esta página web, con fines comerciales, en cualquier soporte y por
            cualquier medio técnico, sin la autorización de ORDNSERVE. El
            USUARIO se compromete a respetar los derechos de Propiedad
            Intelectual e Industrial titularidad de ORDNSERVE. Podrá visualizar
            los elementos del portal e incluso imprimirlos, copiarlos y
            almacenarlos en el disco duro de su ordenador o en cualquier otro
            soporte físico siempre y cuando sea, única y exclusivamente, para su
            uso personal y privado. El USUARIO deberá abstenerse de suprimir,
            alterar, eludir o manipular cualquier dispositivo de protección o
            sistema de seguridad que estuviera instalado en el las páginas de
            ORDNSERVE.
          </span>
        </p>
        <p>
          <span className={style["Legal__paragraph"]}>
            6. EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD
          </span>
        </p>
        <p>
          ORDNSERVE no se hace responsable, en ningún caso, de los daños y
          perjuicios de cualquier naturaleza que pudieran ocasionar, a título
          enunciativo: errores u omisiones en los contenidos, falta de
          disponibilidad del portal o la transmisión de virus o programas
          maliciosos o lesivos en los contenidos, a pesar de haber adoptado
          todas las medidas tecnológicas necesarias para evitarlo.
        </p>
        <p>7. MODIFICACIONES</p>
        <p>
          ORDNSERVE se reserva el derecho de efectuar sin previo aviso las
          modificaciones que considere oportunas en su portal, pudiendocambiar,
          suprimir o añadir tanto los contenidos y servicios que se presten a
          través de la misma como la forma en la que éstos aparezcan presentados
          o localizados en su portal.
        </p>
        <p>8. ENLACES</p>
        <p>
          En el caso de que en www.ordnserve.com se dispusiesen enlaces o
          hipervínculos hacía otros sitios de Internet, ORDNSERVE no ejercerá
          ningún tipo de control sobre dichos sitios y contenidos. En ningún
          caso ORDNSERVE asumirá responsabilidad alguna por los contenidos de
          algún enlace perteneciente a un sitio web ajeno, ni garantizará la
          disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud,
          veracidad, validez y constitucionalidad de cualquier material o
          información contenida en ninguno de dichos hipervínculos u otros
          sitios de Internet. Igualmente la inclusión de estas conexiones
          externas no implicará ningún tipo de asociación, fusión o
          participación con las entidades conectadas.
        </p>
        <p>9. DERECHO DE EXCLUSIÓN</p>
        <p>
          ORDNSERVE se reserva el derecho a denegar o retirar el acceso a portal
          y/o los servicios ofrecidos sin necesidad de preaviso, a instancia
          propia o de un tercero, a aquellos usuarios que incumplan las
          presentes Condiciones Generales de Uso.
        </p>
        <p>10.GENERALIDADES</p>
        <p>
          ORDNSERVE perseguirá el incumplimiento de las presentes condiciones
          así como cualquier utilización indebida de su portal ejerciendo todas
          las acciones civiles y penales que le puedan corresponder en derecho.
        </p>
        <p>
          <span className={style["Legal__paragraph"]}>
            11.MODIFICACIÓN DE LAS PRESENTES CONDICIONES Y DURACIÓN
          </span>
        </p>
        <p>
          ORDNSERVE podrá modificar en cualquier momento las condiciones aquí
          determinadas, siendo debidamente publicadas como aquí aparecen. La
          vigencia de las citadas condiciones irá en función de su exposición y
          estarán vigentes hasta debidamente publicadas. que sean modificadas
          por otras.
        </p>
        <p>
          <span className={style["Legal__paragraph"]}>
            12. LEGISLACIÓN APLICABLE Y JURISDICCIÓN
          </span>
        </p>
        <p>
          La relación entre ORDNSERVE y el USUARIO se regirá por la normativa
          española vigente y cualquier controversia se someterá a los Juzgados y
          tribunales de la ciudad de MADRID.
        </p>
        <p>&nbsp;</p>
        <p>POLITICA DE COOKIES</p>
        <p>
          &nbsp;
          <span className={style["Legal__paragraph"]}>
            En cumplimiento con lo dispuesto en el artículo 22.2 de la Ley
            34/2002, de 11 de julio, de Servicios de la Sociedad de la
            Información y de Comercio Electrónico, esta página web le informa,
            en esta sección, sobre la política de recogida y tratamiento de
            cookies.
          </span>
        </p>
        <p>
          <span className={style["Legal__paragraph"]}>
            ¿QUÉ SON LAS COOKIES?
          </span>
        </p>
        <p>
          Una cookie es un fichero que se descarga en su ordenador al acceder a
          determinadas páginas web. Las cookies permiten a una página web, entre
          otras cosas, almacenar y recuperar información sobre los hábitos de
          navegación de un usuario o de su equipo y, dependiendo de la
          información que contengan y de la forma en que utilice su equipo,
          pueden utilizarse para reconocer al usuario.
        </p>
        <p>&nbsp;</p>
        <p>¿QUÉ TIPOS DE COOKIES UTILIZA ESTA PÁGINA WEB?</p>
        <p>Esta página web utiliza los siguientes tipos de cookies:</p>
        <p>
          <span className={style["Legal__paragraph"]}>
            Cookies de análisis: Son aquéllas que bien tratadas por nosotros o
            por terceros, nos permiten cuantificar el número de usuarios y así
            realizar la medición y análisis estadístico de la utilización que
            hacen los usuarios del servicio ofertado. Para ello se analiza su
            navegación en nuestra página web con el fin de mejorar la oferta de
            productos o servicios que le ofrecemos.
          </span>
        </p>
        <p>
          <span className={style["Legal__paragraph"]}>
            Cookies técnicas: Son aquellas que permiten al usuario la navegación
            a través del área restringida y la utilización de sus diferentes
            funciones, como por ejemplo, llevar a cambio el proceso de compra de
            un artículo.
          </span>
        </p>
        <p>
          <span className={style["Legal__paragraph"]}>
            Cookies de personalización: Son aquellas que permiten al usuario
            acceder al servicio con algunas características de carácter general
            predefinidas en función de una serie de criterios en el terminal del
            usuario como por ejemplo serian el idioma o el tipo de navegador a
            través del cual se conecta al servicio.
          </span>
        </p>
        <p>
          <span className={style["Legal__paragraph"]}>
            Cookies publicitarias: Son aquéllas que, bien tratadas por esta web
            o por terceros, permiten gestionar de la forma más eficaz posible la
            oferta de los espacios publicitarios que hay en la página web,
            adecuando el contenido del anuncio al contenido del servicio
            solicitado o al uso que realice de nuestra página web. Para ello
            podemos analizar sus hábitos de navegación en Internet y podemos
            mostrarle publicidad relacionada con su perfil de navegación.
          </span>
        </p>
        <p>
          <span className={style["Legal__paragraph"]}>
            Cookies de publicidad comportamental: Son aquellas que permiten la
            gestión, de la forma más eficaz posible, de los espacios
            publicitarios que, en su caso, el editor haya incluido en una página
            web, aplicación o plataforma desde la que presta el servicio
            solicitado. Este tipo de cookies almacenan información del
            comportamiento de los visitantes obtenida a través de la observación
            continuada de sus hábitos de navegación, lo que permite desarrollar
            un perfil específico para mostrar avisos publicitarios en función
            del mismo.
          </span>
        </p>
        <p>
          <span className={style["Legal__paragraph"]}>
            DESACTIVAR LAS COOKIES.
          </span>
        </p>
        <p>
          Puede usted permitir, bloquear o eliminar las cookies instaladas en su
          equipo mediante la configuración de las opciones del navegador
          instalado en su ordenador.
        </p>
        <p>
          <span className={style["Legal__paragraph"]}>
            En la mayoría de los navegadores web se ofrece la posibilidad de
            permitir, bloquear o eliminar las cookies instaladas en su equipo.
          </span>
        </p>
        <p>
          <span className={style["Legal__paragraph"]}>
            A continuación puede acceder a la configuración de los navegadores
            webs más frecuentes para aceptar, instalar o desactivar las cookies:
          </span>
        </p>
        <p>
          <span className={style["Legal__paragraph"]}>
            Configurar cookies en Google Chrome
          </span>
        </p>
        <p>
          <span className={style["Legal__paragraph"]}>
            Configurar cookies en Microsoft Internet Explorer
          </span>
        </p>
        <p>
          <span className={style["Legal__paragraph"]}>
            Configurar cookies en Mozilla Firefox
          </span>
        </p>
        <p>
          <span className={style["Legal__paragraph"]}>
            Configurar cookies en Safari (Apple)
          </span>
        </p>
        <p>
          <span className={style["Legal__paragraph"]}>
            COOKIES DE TERCEROS.
          </span>
        </p>
        <p>
          Esta página web utiliza servicios de terceros para recopilar
          información con fines estadísticos y de uso de la web. Se podrán
          utilizar cookies de DoubleClick para mejorar la publicidad que se
          incluye en el sitio web. Son utilizadas para orientar la publicidad
          según el contenido que es relevante para un usuario, mejorando así la
          calidad de experiencia en el uso del mismo.
        </p>
        <p>
          <span className={style["Legal__paragraph"]}>
            En concreto, usamos los servicios de Google Adsense y de Google
            Analytics para nuestras estadísticas y publicidad. Algunas cookies
            son esenciales para el funcionamiento del sitio, por ejemplo el
            buscador incorporado.
          </span>
        </p>
        <p>
          <span className={style["Legal__paragraph"]}>
            Nuestro sitio incluye otras funcionalidades proporcionadas por
            terceros. Usted puede fácilmente compartir el contenido en redes
            sociales como Facebook, Twitter o Google +, con los botones que
            hemos incluido a tal efecto.
          </span>
        </p>
        <p>
          <span className={style["Legal__paragraph"]}>
            ADVERTENCIA SOBRE ELIMINAR COOKIES.
          </span>
        </p>
        <p>
          Usted puede eliminar y bloquear todas las cookies de este sitio, pero
          parte del sitio no funcionará o la calidad de la página web puede
          verse afectada.&nbsp;
          <span className={style["Legal__paragraph"]}>
            Si tiene cualquier duda acerca de nuestra política de cookies, puede
            contactar con esta página web a través de nuestros canales de{" "}
            <Link href="/#contacto">Contacto.</Link>
          </span>
          <br />
          <br />
          <small>v1.0</small>
        </p>
      </Container>
    </main>
  );
};

export default Legal;
