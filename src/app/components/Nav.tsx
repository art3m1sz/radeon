import { Flex, Text } from "@chakra-ui/react";

export default function Nav(){
    return (
        <Flex w={"full"} h={"full"} gap={"64px"} px={"120px"} py={"24px"} backgroundColor={"#130202ff"}>
                        <Text fontSize="24px" fontWeight="bold">
                            RADEON{" "}
                            <Text as="span" color="#FF0000">
                                #2
                            </Text>
                        </Text>
                        <Text fontSize="24px">Seminar</Text>
                        <Text fontSize="24px">Kompetisi</Text>
                        <Text fontSize="24px">Kontak Personal</Text>
                    </Flex>
    )
}