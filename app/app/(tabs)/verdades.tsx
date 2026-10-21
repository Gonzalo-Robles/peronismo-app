import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Define the data structure for a single truth
interface Truth {
  id: number;
  truth: string;
  modernExplanation: string;
}

// The 20 Verdades del Peronismo with modern, relevant explanations
const truthsData: Truth[] = [
  {
    id: 1,
    truth: "La verdadera democracia es aquella donde el gobierno hace lo que el pueblo quiere y defiende un solo interés: el del pueblo.",
    modernExplanation: "Esto significa que la política no es solo votar cada cuatro años. Es que el gobierno deba ser un 'servidor' del pueblo, no el dueño. Si el gobierno se enfoca en intereses de élites o grupos pequeños, no está cumpliendo con la promesa de una democracia real."
  },
  {
    id: 2,
    truth: "El justicialismo es esencialmente popular. Todo círculo político es antipopular, y por lo tanto, no es justicialista.",
    modernExplanation: "Si una idea política solo le sirve a un grupo cerrado de gente (un 'círculo'), no es para todos. El justicialismo busca ser una fuerza que represente a la mayoría, a la gente común, y no solo a los poderosos o a los 'expertos'."
  },
  {
    id: 3,
    truth: "El justicialista trabaja para el movimiento. El que en su nombre sirve a un círculo o a un hombre o caudillo, lo es solo de nombre.",
    modernExplanation: "La lealtad debe ser al movimiento o a la causa, no a una persona específica. Es como en un equipo deportivo: apoyas al equipo, no solo a un jugador estrella. El movimiento es más grande que cualquier líder."
  },
  {
    id: 4,
    truth: "No existe para el justicialismo más que una sola clase de hombres: los que trabajan.",
    modernExplanation: "El valor principal en esta doctrina es el trabajo. No importa tu título o tu riqueza, sino lo que aportas y cómo te desarrollas en la sociedad. El trabajo es el motor de la dignidad."
  },
  {
    id: 5,
    truth: "En la Nueva Argentina el trabajo es un derecho, que crea la dignidad del hombre, y es un deber, porque es justo que cada uno produzca por lo menos lo que consume.",
    modernExplanation: "El trabajo no es solo un medio para ganar plata; es lo que te da valor como persona. Es un derecho que te garantiza dignidad, pero también es una responsabilidad: contribuir a la sociedad."
  },
  {
    id: 6,
    truth: "Para un justicialista no puede haber nada mejor que otro justicialista.",
    modernExplanation: "Esto habla de la solidaridad y la unidad. El bienestar de la comunidad y de los que comparten la misma visión es lo más importante. Es un principio de hermandad política."
  },
  {
    id: 7,
    truth: "Ningún justicialista debe sentirse más de lo que es ni menos de lo que debe ser. Cuando un justicialista comienza a sentirse más de lo que es, empieza a convertirse en oligarca.",
    modernExplanation: "Hay que tener humildad. El poder y el éxito pueden hacer que alguien se sienta superior. Si eso pasa, se aleja de la esencia popular y se vuelve una élite, un 'oligarca', perdiendo la conexión con el pueblo."
  },
  {
    id: 8,
    truth: "En la acción política la escala de valores de todo justicialista es la siguiente: primero, la Patria, después el movimiento, y luego los hombres.",
    modernExplanation: "La prioridad es la Nación (la Patria). Después, el movimiento que la representa. Y recién después, los intereses individuales. Es una jerarquía de valores que pone al país por encima de todo."
  },
  {
    id: 9,
    truth: "La política no es para nosotros un fin, sino solo el medio para el bien de la patria que es la felicidad de sus hijos y la grandeza nacional.",
    modernExplanation: "La política no es un juego de poder por sí mismo. Es una herramienta. Su único objetivo debe ser mejorar la vida de la gente (la felicidad) y hacer crecer al país (la grandeza)."
  },
  {
    id: 10,
    truth: "Los dos brazos del justicialismo son la justicia social y la ayuda social. Con ellos damos al pueblo un abrazo de justicia y amor.",
    modernExplanation: "El justicialismo tiene dos pilares: la justicia (asegurar que todos tengan sus derechos) y la ayuda (dar una mano en momentos difíciles). Es una combinación de derechos y apoyo social."
  },
  {
    id: 11,
    truth: "El justicialismo anhela la unidad nacional y no la lucha. Desea héroes, pero no mártires.",
    modernExplanation: "Busca que el país esté unido, que todos avancen juntos. Valora a quienes construyen y avanzan (héroes), más que a quienes solo se sacrifican en la lucha (mártires)."
  },
  {
    id: 12,
    truth: "En la Nueva Argentina los únicos privilegiados son los niños.",
    modernExplanation: "Esto es un compromiso social: la infancia debe ser protegida y priorizada. Los niños son el futuro, y por eso deben tener las mejores condiciones y derechos."
  },
  {
    id: 13,
    truth: "Un gobierno sin doctrina es un cuerpo sin alma. Por eso el peronismo tiene su propia doctrina política, económica y social: el Justicialismo.",
    modernExplanation: "Un gobierno que solo reacciona a crisis sin tener un plan o una filosofía clara es inestable. El Justicialismo es esa 'filosofía' que le da dirección y alma al proyecto de país."
  },
  {
    id: 14,
    truth: "El justicialismo es una nueva filosofía de la vida, simple, práctica, popular, profundamente cristiana y profundamente humana.",
    modernExplanation: "Es una forma de ver la vida que es accesible para todos, práctica en el día a día, y que combina valores humanos universales con una base ética sólida."
  },
  {
    id: 15,
    truth: "Como doctrina política, el justicialismo realiza el equilibrio del derecho del individuo con el de la comunidad.",
    modernExplanation: "Busca el punto medio. No es solo el individuo haciendo lo que quiere (libertad total), ni la comunidad imponiendo todo (colectivismo total). Busca un balance entre ambos."
  },
  {
    id: 16,
    truth: "Como doctrina económica, el justicialismo realiza la economía social, poniendo el capital al servicio de la economía y ésta al servicio del bienestar social.",
    modernExplanation: "No es anti-capitalismo, sino 'social'. Significa que el capital (la inversión, el dinero) debe trabajar para mejorar la vida de la gente, y no solo para generar ganancias para unos pocos."
  },
  {
    id: 17,
    truth: "Como doctrina social, el justicialismo realiza la justicia social, que da a cada persona su derecho en función social.",
    modernExplanation: "La justicia social no es solo dar plata. Es asegurar que cada persona tenga lo que necesita (salud, educación, vivienda) para poder participar plenamente en la sociedad, según su rol."
  },
  {
    id: 18,
    truth: "Queremos una Argentina socialmente justa, económicamente libre y políticamente soberana.",
    modernExplanation: "Este es el objetivo final: un país donde la gente viva bien (justicia social), donde la economía funcione sin cadenas externas (libertad económica), y donde las decisiones sean de los argentinos (soberanía política)."
  },
  {
    id: 19,
    truth: "Constituimos un gobierno centralizado, un Estado organizado y un pueblo libre.",
    modernExplanation: "Se busca un Estado fuerte y organizado que pueda garantizar derechos y servicios a todos, pero que al mismo tiempo deje espacio para la libertad individual y la participación ciudadana."
  },
  {
    id: 20,
    truth: "En esta tierra, lo mejor que tenemos es el pueblo.",
    modernExplanation: "Es un recordatorio de que el verdadero poder y la riqueza de Argentina no están en los recursos naturales o en las instituciones, sino en la gente, en su fuerza y en su voluntad."
  },
];

// Component for displaying a single truth card
const TruthCard: React.FC<{ truth: Truth }> = ({ truth }) => (
  <View style={styles.card}>
    <Text style={styles.truthTitle}>{truth.id}. {truth.truth}</Text>
    <View style={styles.explanationContainer}>
      <Ionicons name="bulb-outline" size={20} color="#FFC107" style={styles.icon} />
      <Text style={styles.explanationText}>{truth.modernExplanation}</Text>
    </View>
  </View>
);

const VerdadesScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>📜 Las 20 Verdades del Peronismo</Text>
          <Text style={styles.headerSubtitle}>Conectando la historia con la Argentina de hoy.</Text>
        </View>
        
        {truthsData.map((truth) => (
          <TruthCard key={truth.id} truth={truth} />
        ))}
        
        <View style={{ height: 50 }} /> 
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Light neutral background
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#333',
    textAlign: 'center',
    lineHeight: 36,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android shadow
  },
  truthTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#004D40', // Deep green/teal accent
    marginBottom: 15,
    lineHeight: 26,
  },
  explanationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  icon: {
    marginRight: 10,
    marginTop: 3,
  },
  explanationText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22, // Increased line height for readability
  },
});

export default VerdadesScreen;