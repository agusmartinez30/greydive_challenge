import { Box, Text } from "@chakra-ui/react";
import Tarea from "./Tarea";

const Item = ({ item, tareas }) => {
  return (
    <>
      <Box padding="4" borderTop="1px solid #1A0000">
        <Text
          fontSize="32px"
          fontWeight={600}
          color="#89C4E1"
          textTransform="capitalize"
          fontFamily="Lato"
        >
          {item.cliente}
        </Text>
        <Text fontSize="16px" fontFamily="Lato" fontWeight={600} paddingY={4}>
          {item.escenario}
        </Text>
        <Box boxSize="full">
          {/* el video no funciona :( */}
          <video width="750" height="500" controls>
            <source src={item.linkVideo} type="video/mp4" />
          </video>
        </Box>
        <Text fontSize="22px" fontFamily="Lato" fontWeight={600} paddingY={4}>
          Transcripción
        </Text>
        <Box
          maxWidth="full"
          height="300px"
          overflow="scroll"
          padding={4}
          whiteSpace="wrap"
        >
          <Text as={"p"} fontSize="16px" fontFamily="Poppins">
            {item.transcripcion}
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" gap={4} paddingY={6}>
          <Text fontSize="22px" fontWeight="medium">
            Tareas
          </Text>
          <Text fontSize="18px" fontWeight="medium">
            Escenario:
          </Text>
          <Text>{item.escenario}</Text>
          <Box display="flex" flexDirection="column" gap={4}>
            {item.cliente == "viamo"
              ? tareas
                  .slice(0, 9)
                  .map((tarea, id) => <Tarea tarea={tarea} id={id} />)
              : tareas
                  .slice(40, 49)
                  .map((tarea, id) => <Tarea tarea={tarea} id={id} />)}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Item;
