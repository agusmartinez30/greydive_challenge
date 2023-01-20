import { Container, Heading, VStack } from "@chakra-ui/react";
import Item from "./components/Item";
import db from "./db/db.json";

function App() {
  let tareas = [];
  // extraer el array de tareas de cada item de la base de datos.
  for (const data of db) {
    const { preguntas } = data;
    preguntas.map((e) => tareas.push(e));
  }

  // opcion 2
  // extraemos las preguntas de cada item de la bd
  /* const data_viamo = db[0].preguntas;
  const data_nebula = db[1].preguntas; */

  return (
    <VStack bg="#F5EDCE">
      <Container maxW="2xl">
        <Heading
          paddingY={4}
          color="#58287F"
          fontFamily="Poppins"
          fontSize="36px"
        >
          Simulacr.
        </Heading>
        {db.map((item, id) => (
          <Item key={id} item={item} tareas={tareas} />
        ))}
      </Container>
    </VStack>
  );
}

export default App;
