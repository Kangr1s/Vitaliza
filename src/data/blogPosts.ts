export interface BlogPost {
  slug: string;           // para la URL
  title: string;
  date: string;
  comments: number;
  image: string;
  excerpt: string;        // descripción corta para la carta
  content: string;        // aquí va el contenido completo (puede ser HTML/MD)
}

export const blogPosts: BlogPost[] = [
  {
    slug: "como-evitar-dolor-de-espalda",
    title: "Cómo evitar el dolor de espalda en el trabajo",
    date: "01 Ene 2045",
    comments: 3,
    image: "/img/blog-1.jpg",
    excerpt:
      "El dolor de espalda es uno de los problemas más comunes en la oficina. Te damos recomendaciones para mejorar tu postura y cuidar tu columna.",
    content: `
      <p>
        El dolor de espalda es una de las molestias más frecuentes en el ámbito laboral, especialmente en trabajos de oficina 
        donde se pasan largas horas sentado frente a un computador. Una postura incorrecta puede derivar en tensiones musculares, 
        contracturas e incluso en problemas crónicos a nivel de columna.
      </p>

      <h3>Principales causas del dolor de espalda en la oficina</h3>
      <ul>
        <li>Postura encorvada frente al escritorio.</li>
        <li>Uso inadecuado de sillas sin soporte lumbar.</li>
        <li>Pocas pausas activas durante la jornada laboral.</li>
        <li>Estrés y tensión acumulada en hombros y cuello.</li>
      </ul>

      <h3>Consejos prácticos para prevenirlo</h3>
      <p>
        Adoptar hábitos saludables es clave para cuidar tu columna vertebral. Estos son algunos de los más efectivos:
      </p>
      <ol>
        <li>Ajusta la altura de tu silla y monitor para mantener la mirada al frente.</li>
        <li>Apoya completamente la espalda en el respaldo y evita encorvarte.</li>
        <li>Haz pausas activas cada 45 minutos: estírate, camina y moviliza las articulaciones.</li>
        <li>Fortalece la zona lumbar y abdominal con ejercicios de core.</li>
      </ol>

      <h3>Beneficios de corregir tu postura</h3>
      <p>
        Mantener una buena postura no solo reduce los dolores, también mejora la concentración, 
        aumenta la productividad y previene futuras lesiones.
      </p>
    `,
  },
  {
    slug: "beneficios-fisioterapia-semanal",
    title: "Beneficios de la fisioterapia semanal",
    date: "08 Ene 2045",
    comments: 5,
    image: "/img/blog-2.jpg",
    excerpt:
      "Realizar sesiones de fisioterapia de manera regular ayuda a prevenir lesiones y mantener tu cuerpo en óptimas condiciones.",
    content: `
      <p>
        La fisioterapia es una herramienta fundamental para mantener la salud física, 
        prevenir lesiones y tratar dolencias musculoesqueléticas. 
        Cuando se realiza de forma semanal, sus efectos se potencian, ofreciendo resultados a corto y largo plazo.
      </p>

      <h3>Principales beneficios</h3>
      <ul>
        <li><strong>Prevención de lesiones:</strong> fortalece músculos y articulaciones reduciendo riesgos.</li>
        <li><strong>Mejora de la movilidad:</strong> ideal para personas con rigidez articular o dolores crónicos.</li>
        <li><strong>Recuperación más rápida:</strong> acelera procesos de rehabilitación post-quirúrgicos o deportivos.</li>
        <li><strong>Bienestar integral:</strong> reduce niveles de estrés y favorece la relajación general del cuerpo.</li>
      </ul>

      <h3>¿Para quién está recomendada?</h3>
      <p>
        La fisioterapia semanal no está destinada únicamente a pacientes con lesiones. 
        También es recomendada para deportistas, adultos mayores, personas con trabajos sedentarios y cualquiera 
        que busque mantener su cuerpo en óptimas condiciones.
      </p>

      <h3>Conclusión</h3>
      <p>
        Invertir en fisioterapia semanal es invertir en calidad de vida. 
        Con una rutina personalizada puedes evitar molestias futuras y potenciar tu bienestar físico y mental.
      </p>
    `,
  },
  {
    slug: "ejercicio-regular-envejecimiento",
    title: "El ejercicio regular puede retrasar el envejecimiento",
    date: "15 Ene 2045",
    comments: 2,
    image: "/img/blog-3.jpg",
    excerpt:
      "Mantenerte activo mejora tu salud física y ayuda a conservar la vitalidad con los años.",
    content: `
      <p>
        El ejercicio físico regular es una de las prácticas más efectivas para mantener la vitalidad a lo largo de los años. 
        Diversos estudios han demostrado que la actividad física no solo mejora la salud cardiovascular y muscular, 
        sino que también estimula la regeneración celular y ayuda a retrasar los signos del envejecimiento.
      </p>

      <h3>Beneficios del ejercicio regular en el envejecimiento</h3>
      <ul>
        <li>Fortalece huesos y articulaciones, previniendo enfermedades como la osteoporosis.</li>
        <li>Mejora la memoria y las funciones cognitivas, reduciendo el riesgo de demencia.</li>
        <li>Aumenta la energía y mejora el estado de ánimo gracias a la liberación de endorfinas.</li>
        <li>Favorece el control del peso y la salud metabólica.</li>
      </ul>

      <h3>Ejercicios recomendados</h3>
      <ol>
        <li><strong>Caminatas diarias:</strong> mejoran la circulación y mantienen la movilidad articular.</li>
        <li><strong>Entrenamiento de fuerza:</strong> ayuda a conservar masa muscular y densidad ósea.</li>
        <li><strong>Yoga o pilates:</strong> incrementan la flexibilidad y reducen el estrés.</li>
        <li><strong>Ejercicios aeróbicos moderados:</strong> como nadar o andar en bicicleta.</li>
      </ol>

      <h3>Conclusión</h3>
      <p>
        El envejecimiento es un proceso natural, pero su impacto en nuestro cuerpo y mente 
        puede atenuarse con hábitos saludables. Realizar ejercicio de manera regular 
        es una inversión en energía, vitalidad y bienestar para disfrutar cada etapa de la vida al máximo.
      </p>
    `,
  },
];
