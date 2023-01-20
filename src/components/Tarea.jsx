import { Box, Text } from "@chakra-ui/react";

const Tarea = ({ id, tarea }) => {
  return (
    <Box
      border="1px solid #000"
      padding={4}
      borderRadius="2xl"
      fontFamily="Poppins"
      transition="ease-in-out .2s"
      _hover={{ boxShadow: "6px 6px #89C4E1" }}
    >
      <Text>Tarea {id + 1}</Text>
      <Text fontWeight="medium">{tarea.texto}</Text>
      <Text color="#58287F" fontWeight={400}>
        Duración de la tarea: {tarea.tiempo}
      </Text>
    </Box>
  );
};

export default Tarea;
