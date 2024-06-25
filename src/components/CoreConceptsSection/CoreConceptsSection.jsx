import CoreConcepts from "../CoreConcepts/CoreConcepts";
import { CORE_CONCEPTS } from "../../data";

export default function CoreConceptsSection() {
  return (
    <section id="coreConcepts">
      <h2>Principales Caracteristicas</h2>

      <div>
        {CORE_CONCEPTS.map((conceptItem, index) => (
          <CoreConcepts key={index} {...conceptItem} />
        ))}
      </div>
    </section>
  );
}
