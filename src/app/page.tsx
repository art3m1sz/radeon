"use client";
import { Box, Button, Flex, Span, Text } from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BlurCircle } from "./components/BlurCircle";

const MotionText = motion(Text);
const MotionImage = motion(Image);
export default function Home() {
    const fullText =
        "BEYOND CODE AND CIRCUIT:\nINSPIRED BY THE PAST BUILD FOR TOMORROW";
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
        const delayBeforeTyping = 1500; // delay 1.5 detik sebelum mulai ngetik
        let interval: NodeJS.Timeout;

        const timeout = setTimeout(() => {
            interval = setInterval(() => {
                setDisplayedText(fullText.slice(0, i));
                i++;
                if (i > fullText.length) clearInterval(interval);
            }, 50); // kecepatan ketik (50ms per karakter)
        }, delayBeforeTyping);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, []);
    return (
        <Flex
            direction={"column"}
            w={"full"}
            h={"full"}
            backgroundColor={"#1D0202"}
            position={"relative"}
            gap={"60px"}>
            <BlurCircle
                size="505px"
                color="#9D1800"
                top="-10%"
                left="-25%"
                blur="150px"
            />
            <BlurCircle
                size="538px"
                color="#9D1800"
                top="20%"
                right="-28%"
                blur="150px"
            />
            <BlurCircle
                size="505px"
                color="#9D1800"
                top="45%"
                left="-25%"
                blur="150px"
            />
            <BlurCircle
                size="538px"
                color="#9D1800"
                top="70%"
                right="-28%"
                blur="150px"
            />

            <Flex
                w="full"
                h="full"
                px={{ base: "20px", md: "40px", lg: "120px" }}
                py={{ base: "40px", md: "60px", lg: "80px" }}
                justify="space-evenly">
                <Flex
                    w="full"
                    direction={{ base: "column", md: "column", lg: "row" }}
                    align="center"
                    justify="center"
                    gap={{ base: "40px", md: "60px", lg: "0" }}>
                    {/* Text Section */}
                    <Flex
                        direction="column"
                        w="full"
                        h="full"
                        justify="center"
                        align={{ base: "center", lg: "flex-start" }}
                        textAlign={{ base: "center", lg: "left" }}>
                        {/* RADEON */}
                        <MotionText
                            fontSize={{ base: "48px", md: "72px", lg: "120px" }}
                            fontWeight="bold"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}>
                            RADEON
                        </MotionText>

                        {/* #2 dengan glowing effect */}
                        <MotionText
                            fontSize={{ base: "48px", md: "72px", lg: "120px" }}
                            color="#FF2B2B"
                            mt={{ base: "-5%", md: "-8%", lg: "-15%" }}
                            fontWeight="bold"
                            initial={{ scale: 0 }}
                            animate={{
                                scale: 1,
                                textShadow: [
                                    "0 0 10px #CC1212",
                                    "0 0 20px #CC1212",
                                    "0 0 40px #FF2B2B",
                                    "0 0 20px #CC1212",
                                    "0 0 10px #CC1212",
                                ],
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                            }}>
                            #2
                        </MotionText>

                        {/* Tagline typing effect */}
                        <Text
                            fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                            mt={{ base: "-2%", md: "-4%", lg: "-8%" }}
                            w={{ base: "100%", md: "100%", lg: "120%" }}
                            whiteSpace="pre-line">
                            {displayedText}
                            <Span style={{ marginLeft: "2px" }} />
                        </Text>

                        {/* Button Section */}
                        <Flex
                            mt={{ base: "24px", md: "32px" }}
                            gap={{ base: "12px", md: "20px" }}
                            justify={{ base: "center", lg: "flex-start" }}>
                            <Button
                                size={{ base: "sm", md: "md", lg: "lg" }}
                                bg="rgba(255, 43, 43, 0.15)" // merah transparan
                                color="#DCDCDC"
                                border="1px solid rgba(255, 43, 43, 0.4)"
                                backdropFilter="blur(12px)"
                                _hover={{
                                    bg: "rgba(255, 43, 43, 0.25)",
                                    color: "white",
                                    border: "1px solid rgba(255, 43, 43, 0.6)",
                                }}
                                rounded="xl"
                                px={{ base: 4, md: 6 }}
                                py={{ base: 2, md: 3 }}>
                                Daftar Lomba
                            </Button>

                            <Button
                                size={{ base: "sm", md: "md", lg: "lg" }}
                                bg="rgba(255, 255, 255, 0.1)" // putih transparan
                                color="#ff1616ff"
                                border="1px solid rgba(255, 255, 255, 0.3)"
                                backdropFilter="blur(12px)"
                                _hover={{
                                    bg: "rgba(255, 255, 255, 0.2)",
                                    border: "1px solid rgba(255, 255, 255, 0.5)",
                                }}
                                rounded="xl"
                                px={{ base: 4, md: 6 }}
                                py={{ base: 2, md: 3 }}>
                                Daftar Seminar
                            </Button>
                        </Flex>
                    </Flex>

                    {/* Banner Image */}
                    <Flex
                        w="full"
                        h="full"
                        align="center"
                        justify={{ base: "center", lg: "flex-end" }}>
                        <MotionImage
                            src="/banner.png"
                            alt="Radeon #2"
                            width={350}
                            height={350}
                            style={{
                                width: "100%",
                                maxWidth: "482px",
                                height: "auto",
                            }}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                y: [0, -15, 0],
                            }}
                            transition={{
                                x: { duration: 1, ease: "easeOut" },
                                opacity: { duration: 1, ease: "easeOut" },
                                y: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                        />
                    </Flex>
                </Flex>
            </Flex>

            <Flex
                w="fit-content"
                h="full"
                direction="column"
                px={["24px", "48px", "120px"]}
                py={["40px", "60px", "90px"]}
                justify="center"
                align="center"
                mx="auto"
                gap="40px">
                <Text
                    fontSize={{ base: "28px", lg: "48px" }}
                    fontWeight="bold"
                    color="white">
                    Seminar
                </Text>

                <Flex
                    bg="rgba(40,1,1,0.8)"
                    borderRadius="40px"
                    boxShadow="lg"
                    w="full"
                    p="24px"
                    gap="24px"
                    direction={["column", "column", "row"]}
                    align="center">
                    {/* Left Image */}
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center">
                        <Image
                            src="/seminar.png"
                            alt="Seminar IoT"
                            width={492}
                            height={481}
                            style={{
                                objectFit: "cover",
                                maxWidth: "100%",
                                height: "auto",
                            }}
                        />
                    </Box>

                    {/* Right Side */}
                    <Flex
                        direction="column"
                        my="auto"
                        color="#DFDFDF"
                        gap="32px"
                        pr={["0px", "0px", "48px"]}
                        textAlign={["center", "center", "left"]}>
                        <Text
                            fontSize={["18px", "22px", "30px"]}
                            textAlign={"center"}
                            fontWeight="bold"
                            mb={4}
                            mx={"auto"}>
                            Reinforcement Learning untuk Bidang Robotika
                        </Text>
                        <Flex direction="column" gap="18px" color={"#DFDFDF"}>
                            <Text fontSize="16px">📜 Sertifikat</Text>
                            <Text fontSize="16px">📘 Ilmu Bermanfaat</Text>
                            <Text fontSize="16px">🤝 Relasi</Text>
                            <Text fontSize="16px">
                                🎓 SKKM (Khusus Mahasiswa ITB STIKOM Bali)
                            </Text>
                        </Flex>

                        <Button
                            size={{ base: "sm", md: "md", lg: "lg" }}
                            bg="rgba(255, 43, 43, 0.15)" // merah transparan
                            color="#DFDFDF"
                            border="1px solid rgba(255, 43, 43, 0.4)"
                            backdropFilter="blur(12px)"
                            _hover={{
                                bg: "rgba(255, 43, 43, 0.25)",
                                color: "#DFDFDF",
                                border: "1px solid rgba(255, 43, 43, 0.6)",
                            }}
                            rounded="xl"
                            px={{ base: 4, md: 6 }}
                            py={{ base: 2, md: 3 }}>
                            Daftar Sekarang
                        </Button>
                    </Flex>
                </Flex>
            </Flex>

            <Flex
                direction="column"
                align="center"
                justify="center"
                w="full"
                h="full"
                py={{ base: "40px", lg: "90px" }}
                px={{ base: "20px", lg: "120px" }}
                gap={{ base: "24px", lg: "40px" }}>
                {/* Section Title */}
                <Text
                    fontSize={{ base: "28px", lg: "48px" }}
                    fontWeight="bold"
                    color="white"
                    textAlign="center">
                    Kompetisi
                </Text>

                {/* Card Component */}
                {[
                    {
                        title: "Internet Of Things",
                        desc: "Kompetisi Internet of Things (IoT) adalah ajang perlombaan yang menantang peserta untuk menciptakan solusi inovatif berbasis teknologi IoT. Fokusnya adalah bagaimana perangkat pintar (sensor, aktuator, modul komunikasi, cloud, AI) bisa terhubung dan saling bertukar data untuk menyelesaikan masalah nyata di masyarakat.",
                        img: "/iot.png",
                        href: "/guidebookiot.pdf",
                    },
                    {
                        title: "Inovasi Karya Cipta Teknologi",
                        desc: "Kompetisi Inovasi Karya Cipta Teknologi (IKCT) adalah ajang perlombaan yang mendorong peserta untuk menciptakan suatu produk, sistem, atau metode baru berbasis sains dan teknologi yang dapat memberikan manfaat nyata bagi masyarakat.",
                        img: "/ikct.png",
                        href: "/guidebookikct.pdf",
                    },
                ].map((card, i) => (
                    <Flex
                        key={i}
                        bg="rgba(40,1,1,0.8)"
                        borderRadius="40px"
                        p={{ base: "16px", lg: "24px" }}
                        gap={{ base: 4, lg: 6 }}
                        align="center"
                        boxShadow="lg"
                        w="full"
                        direction={{ base: "column", lg: "row" }} // tablet ikut base (column)
                        textAlign={{ base: "center", lg: "left" }}>
                        {/* Left Image */}
                        <Box flexShrink={0}>
                            <Image
                                src={card.img}
                                alt={card.title}
                                width={282}
                                height={285}
                                style={{ objectFit: "contain" }}
                            />
                        </Box>

                        {/* Right Content */}
                        <Flex
                            direction="column"
                            w="full"
                            h="full"
                            color="#DFDFDF"
                            gap={{ base: "12px", lg: "16px" }}>
                            <Text
                                fontSize={{ base: "24px", lg: "40px" }}
                                fontWeight="bold">
                                {card.title}
                            </Text>
                            <Text
                                fontSize={{ base: "14px", lg: "16px" }}
                                color="#DFDFDF">
                                {card.desc}
                            </Text>

                            <Flex
                                gap={{ base: "16px", lg: "32px" }}
                                justify={{ base: "center", lg: "flex-start" }}
                                flexWrap="wrap">
                                <a href={card.href} download>
                                <Button
                                    bg="rgba(255, 43, 43, 0.15)" // merah transparan
                                    color="#DFDFDF"
                                    border="1px solid rgba(255, 43, 43, 0.4)"
                                    backdropFilter="blur(12px)"
                                    _hover={{
                                        bg: "rgba(255, 43, 43, 0.25)",
                                        color: "white",
                                        border: "1px solid rgba(255, 43, 43, 0.6)",
                                    }}
                                    rounded="6px"
                                    padding={"12px"}>
                                    Guidebook
                                </Button>
                                </a>
                                <Button
                                    bg="rgba(255, 43, 43, 0.15)" // merah transparan
                                    color="#DFDFDF"
                                    border="1px solid rgba(255, 43, 43, 0.4)"
                                    backdropFilter="blur(12px)"
                                    _hover={{
                                        bg: "rgba(255, 43, 43, 0.25)",
                                        color: "white",
                                        border: "1px solid rgba(255, 43, 43, 0.6)",
                                    }}
                                    rounded="6px"
                                    padding={"12px"}>
                                    Daftar Sekarang
                                </Button>
                            </Flex>
                        </Flex>
                    </Flex>
                ))}
            </Flex>

            <Flex
                bgGradient="to-b"
                gradientFrom="#000000"
                gradientTo="#450101"
                color="white"
                px={{ base: "24px", md: "60px", lg: "120px" }}
                py={{ base: "40px", md: "60px", lg: "80px" }}>
                <Flex
                    w="full"
                    direction={{ base: "column", md: "row" }}
                    justify="space-between"
                    align={{ base: "center", md: "flex-start" }}
                    textAlign={{ base: "center", md: "left" }}
                    gap={{ base: "40px", md: "60px", lg: "73px" }}>
                    {/* Kolom 1 */}
                    <Flex
                        w={{ base: "full", md: "135%" }}
                        direction="column"
                        gap="16px">
                        <Text
                            fontSize={{ base: "28px", md: "36px", lg: "40px" }}
                            fontWeight="bold">
                            RADEON{" "}
                            <Text as="span" color="#FF0000">
                                #2
                            </Text>
                        </Text>
                        <Text
                            fontSize={{ base: "14px", md: "16px" }}
                            color="#DFDFDF">
                            ITB STIKOM Bali, Jalan Raya Puputan Renon No.86,
                            Denpasar, Bali
                        </Text>
                        <Text
                            fontSize={{ base: "14px", md: "16px" }}
                            color="#DFDFDF">
                            Copyright © 2025 by UKM RADE. All Rights Reserved.
                        </Text>
                    </Flex>

                    {/* Kolom 2 */}
                    <Flex w="full" direction="column" gap="16px">
                        <Text
                            fontSize={{ base: "24px", md: "28px", lg: "32px" }}
                            fontWeight="bold">
                            Kegiatan
                        </Text>
                        <Text>Seminar</Text>
                        <Text>Lomba IoT</Text>
                        <Text>Lomba IKCT</Text>
                    </Flex>

                    {/* Kolom 3 */}
                    <Flex w="full" direction="column" gap="16px">
                        <Text
                            fontSize={{ base: "24px", md: "28px", lg: "32px" }}
                            fontWeight="bold">
                            Kontak
                        </Text>
                        <Text>+62 851-4103-9352 (Aby)</Text>
                        <Text>?????????????????</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}
