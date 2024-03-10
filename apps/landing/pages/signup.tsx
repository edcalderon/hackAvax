import { NextPage } from "next";
import NextLink from "next/link";
import {
  Box,
  Button,
  Center,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Stepper,
  Step,
  Text,
  VStack,
  StepIndicator,
  Spacer,
  HStack,
  Select,
  Checkbox,
  Flex,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, EmailIcon, LockIcon } from "@chakra-ui/icons";
import { Link } from "@saas-ui/react";
import { TbMailDown } from "react-icons/tb";
import {
  MdOutlineHomeWork,
  MdArrowForward,
  MdInfo,
  MdOutlineCheckCircle,
} from "react-icons/md";
import { FiEye, FiEyeOff, FiUser } from "react-icons/fi";
import PhoneNumberInput from "../components/phoneInput/PhoneNumberInput";
import { COUNTRIES } from "../components/phoneInput/countries";
import { PageTransition } from "components/motion/page-transition";
import * as EmailValidator from "email-validator";
import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import "dotenv/config";

//require('dotenv').config()
var tempMsg;

const Login: NextPage = () => {
  var lastPanel = false;

  const [isFormValid, setIsFormValid] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passFocus, setPassFocus] = useState(true);
  const [initialState, setInitialState] = useState(true);
  var [validateMsg, setValidateMsg] = useState({
    charlength: false,
    specialChar: false,
    mayusChar: false,
    validatePassword: false,
    validateEmail: false,
  });

  const [value, setValue] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [aboutUs, setAboutUs] = useState<string>("");
  const [stepErrorMsg, setStepErrorMsg] = useState<string>("");

  const [show, setShow] = useState(false);
  const [showc, setShowc] = useState(false);
  const handleClickPass = () => setShow(!show);
  const handleClickPassc = () => setShowc(!showc);

  const [tData, setTData] = useState(false);
  const [eData, setEData] = useState(false);
  const handleClickPasstd = () => setTData(!tData);
  const handleClickPassed = () => setEData(!eData);

  const countryOptions = COUNTRIES.map(({ name, iso }) => ({
    label: name,
    value: iso,
  }));

  const steps = ["Crea tu cuenta", "Indicanos tu perfil", null];
  const titles = [
    "Tu experiencia de inversión inicia aqui",
    "Ingresa tu información personal",
    "Confirma tu correo",
  ];

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    profileType: "persona",
    firstName: "",
    middleName: "",
    firstLastName: "",
    secondLastName: "",
    phone: "",
    nationality: "",
    city: "",
    our: "",
    dataTreatment: false,
    emailInfo: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e && e.target) {
      const { name, value } = e.target;
      if (name === "nationality") {
        const validatedValue = value.replace(/[^a-zA-Z\s]/g, "");
        setFormData({ ...formData, [name]: validatedValue });
      } else setFormData({ ...formData, [name]: value });
    }
  };
  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission

    try {
      const response = await axios.post("/api/signUpNewUser", formData);

      if (response.data.success) {
        alert("Email sent successfully!");
        setFormData({
          email: "",
          password: "",
          profileType: "persona",
          firstName: "",
          middleName: "",
          firstLastName: "",
          secondLastName: "",
          phone: "",
          nationality: "",
          city: "",
          our: "",
          dataTreatment: false,
          emailInfo: false,
        });
      } else {
        //setError('Failed to send email.');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      //setError('Internal server error.');
    }
    console.log(formData);
    await delay(20);
    handleNextStep();
  };

  const handleSignUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Handle form submission
    try {
      const response = await axios.post("/api/signUpNewUser", formData);
      console.log(response)

      if (response.data.success) {
        alert("Email sent successfully!");
        handleNextStep();
      } else {
        console.log(response.data.error)
        alert(`Error!: ${response.data.error.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      //setError('Internal server error.');
    }
    console.log(formData);
  };

  const handleNextStep = () => {
    switch (currentStep) {
      case 0:
        if (
          formData.email != "" &&
          formData.password != "" &&
          isFormValid != false
        ) {
          setCurrentStep(currentStep + 1);
        }
        break;
      case 1:
        if (formData.profileType != ".") {
          setCurrentStep(currentStep + 1);
        } else {
          setStepErrorMsg("Seleccióna un tipo de perfil");
        }
        break;
      case 2:
        if (
          formData.firstName != "" &&
          formData.firstLastName != "" &&
          formData.phone != ""
        ) {
          setCurrentStep(currentStep + 1);
        } else {
          setStepErrorMsg("Ingresa tu información personal antes de continuar");
        }
        break;
      case 3:
        if (
          formData.nationality != "" &&
          formData.city != "" &&
          formData.our != "" &&
          formData.dataTreatment != false
        ) {
          setCurrentStep(currentStep + 1);
        } else {
          setStepErrorMsg("Ingresa tu información personal antes de continuar");
        }
        break;
      case 4:
      case 5:
        setCurrentStep(currentStep + 1);
        break;
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleNextStept = () => {
    setCurrentStep(currentStep + 1);
  };

  const cityOptions = [
    { value: "Arau", label: "Arauca" },
    { value: "Arme", label: "Armenia" },
    { value: "Barr", label: "Barranquilla" },
    { value: "Bogo", label: "Bogotá" },
    { value: "Buca", label: "Bucaramanga" },
    { value: "Cali", label: "Cali" },
    { value: "Cart", label: "Cartagena" },
    { value: "Cúcu", label: "Cúcuta" },
    { value: "Flor", label: "Florencia" },
    { value: "Ibag", label: "Ibagué" },
    { value: "Leti", label: "Leticia" },
    { value: "Mani", label: "Manizales" },
    { value: "Mede", label: "Medellín" },
    { value: "Mitú", label: "Mitú" },
    { value: "Moco", label: "Mocoa" },
    { value: "Mont", label: "Montería" },
    { value: "Neiv", label: "Neiva" },
    { value: "Past", label: "Pasto" },
    { value: "Pere", label: "Pereira" },
    { value: "Popa", label: "Popayán" },
    { value: "PueC", label: "Puerto Carreño" },
    { value: "PueI", label: "Puerto Inírida" },
    { value: "Quib", label: "Quibdó" },
    { value: "Rioh", label: "Riohacha" },
    { value: "SanA", label: "San Andrés" },
    { value: "SanJ", label: "San José del Guaviare" },
    { value: "Sant", label: "Santa Marta" },
    { value: "Sinc", label: "Sincelejo" },
    { value: "Tunj", label: "Tunja" },
    { value: "Vall", label: "Valledupar" },
    { value: "Vill", label: "Villavicencio" },
    { value: "Yopa", label: "Yopal" },
  ];

  const onCityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCity(value);
  };

  const onAboutUsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setAboutUs(value);
  };

  useEffect(() => {
    setFormData({
      ...formData,
      phone: value,
      city: selectedCity,
      our: aboutUs,
      dataTreatment: tData,
      emailInfo: eData,
    });
  }, [value, selectedCity, aboutUs, tData, eData]);

  useEffect(() => {
    validateForm();
  }, [
    formData.password,
    confirmPassword,
    formData.email
  ]);

  const validateForm = () => {
    let errors = {
      charlength: false,
      specialChar: false,
      mayusChar: false,
      validatePassword: false,
      validateEmail: false,
    };

    if (formData.password.length >= 8) {
      errors.charlength = true;
    }

    if (/[A-Z]+/.test(formData.password)) {
      errors.mayusChar = true;
    }

    if (/[\!\@\#\$\%\^\&\*\)\(\+\=\.\_\-\]\$]+/.test(formData.password)) {
      errors.specialChar = true;
    }

    if (formData.password == confirmPassword) {
      errors.validatePassword = true;
    }

    if (EmailValidator.validate(formData.email)) {
      errors.validateEmail = true;
    }

    if (
      errors.validatePassword != false &&
      errors.charlength != false &&
      errors.mayusChar != false &&
      errors.specialChar != false &&
      errors.validateEmail != false
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
    setValidateMsg(errors);
  };

  const logocolor = "/static/logoUrbanik/color.png";

  return (
    <Box height="100vh">
      <PageTransition
        height="100%"
        display="flex"
        alignItems="center"
        bg={"white"}
      >
        <Stack
          width="100%"
          alignItems={{ base: "center", lg: "flex-start" }}
          direction={{ base: "column", lg: "row" }}
        >
          <Box
            minW="50%"
            minH="100vh"
            bgImage='url("/static/images/building4.jpeg")'
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            display={{ base: "none", lg: "block" }}
          />
          <Stack
            direction="column"
            pt="5%"
            w={{ base: "95%", lg: "25%" }}
            minH="100vh"
            mx="12.5vw"
          >
            <Box>
              <Center display={{ base: "none", lg: "flex" }} mt="5%">
                <NextLink href="/">
                  <Image height="40px" src={logocolor} alt="logo Urbanik" />
                </NextLink>
              </Center>
              <Box display={{ base: "", lg: "none" }} px="8" mt="15%">
                <NextLink href="/">
                  <Image height="32px" src={logocolor} alt="logo Urbanik" />
                </NextLink>
              </Box>
              <Box
                color="urbanik.green"
                fontWeight="bold"
                fontSize={{ base: "25px", lg: "30px" }}
                mx={{ base: "8", lg: "0" }}
                mt="20%"
                display={currentStep == 4 ? "none" : "block"}
                textAlign={{ base: "left", lg: "center" }}
              >
                {currentStep > 1
                  ? currentStep == 4
                    ? titles[2]
                    : titles[1]
                  : titles[0]}
              </Box>
              <Box
                color="urbanik.green"
                fontSize="15px"
                mx={{ base: "8", lg: "0" }}
                mt="2.5%"
                textAlign={{ base: "left", lg: "center" }}
                display={currentStep == 5 ? "none" : "block"}
              >
                {currentStep > 1 ? (
                  currentStep < 4 ? (
                    <HStack color="urbanik.orange" mb="2%" textAlign="left">
                      <MdInfo size="45px" />
                      <Box
                        color="urbanik.green"
                        fontWeight={"bold"}
                        fontSize={{ base: "xs", lg: "sm" }}
                        w={{ base: "170%", lg: "75%" }}
                      >
                        Los datos deben coincidir con tu documento para una
                        vinculación exitosa.
                      </Box>
                    </HStack>
                  ) : (
                    <Box fontSize="15px">{formData.email}</Box>
                  )
                ) : (
                  steps[currentStep]
                )}
              </Box>
            </Box>
            <form onSubmit={handleSubmit}>
              <Center>
                <VStack
                  spacing={8}
                  align="stretch"
                  w={{ base: "85vw", lg: "25vw" }}
                >
                  {currentStep === 0 && (
                    <Stack
                      spacing={4}
                      align="stretch"
                      mt="15%"
                      direction="column"
                    >
                      {/* Step 0 Form Fields */}
                      <InputGroup>
                        <InputLeftElement pointerEvents="none">
                          <EmailIcon color="urbanik.green" />
                        </InputLeftElement>
                        <Input
                          type="email"
                          name="email"
                          isRequired={true}
                          placeholder="Email"
                          _placeholder={{ color: "urbanik.gray.medium" }}
                          focusBorderColor="urbanik.orange"
                          variant="flushed"
                          borderColor="lightgray"
                          colorScheme="primary"
                          autoComplete="off"
                          onClick={() => setInitialState(false)}
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </InputGroup>
                      <InputGroup>
                        <InputLeftElement pointerEvents="none">
                          <LockIcon color="urbanik.green" />
                        </InputLeftElement>
                        <Input
                          name="password"
                          type={show ? "text" : "password"}
                          isRequired={true}
                          variant="flushed"
                          focusBorderColor="urbanik.orange"
                          borderColor="lightgray"
                          placeholder="Contraseña"
                          _placeholder={{ color: "urbanik.gray.medium" }}
                          maxLength={25}
                          autoComplete="off"
                          onClick={() => setPassFocus(false)}
                          value={formData.password}
                          onChange={handleChange}
                        />
                        <InputRightElement boxSize="40px">
                          <Button
                            onClick={handleClickPass}
                            color={"urbanik.black"}
                            bg="transparent"
                          >
                            {show ? (
                              <FiEye size="20px" />
                            ) : (
                              <FiEyeOff size="20px" />
                            )}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <InputGroup>
                        <InputLeftElement pointerEvents="none">
                          <LockIcon color="urbanik.green" />
                        </InputLeftElement>
                        <Input
                          name="ConfirmarContraseña"
                          type={showc ? "text" : "password"}
                          isRequired={true}
                          variant="flushed"
                          focusBorderColor="urbanik.orange"
                          borderColor="lightgray"
                          placeholder="Confirmar Contraseña"
                          _placeholder={{ color: "urbanik.gray.medium" }}
                          maxLength={25}
                          autoComplete="off"
                          onClick={() => setPassFocus(false)}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          value={confirmPassword}
                        />
                        <InputRightElement boxSize="40px">
                          <Button
                            onClick={handleClickPassc}
                            color={"urbanik.black"}
                            bg="transparent"
                          >
                            {showc ? (
                              <FiEye size="20px" />
                            ) : (
                              <FiEyeOff size="20px" />
                            )}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <Box display={passFocus ? "none" : ""} ml="3%">
                        <Stack direction="row" spacing="8">
                          <Stack direction="row">
                            {validateMsg.charlength ? (
                              <CheckIcon color="black" boxSize="10px" />
                            ) : (
                              <CloseIcon color="black" boxSize="10px" />
                            )}
                            <Box color="urbanik.gray.medium" fontSize="2xs">
                              8 Caracteres mínimo
                            </Box>
                          </Stack>
                          <Stack direction="row">
                            {validateMsg.specialChar ? (
                              <CheckIcon color="black" boxSize="10px" />
                            ) : (
                              <CloseIcon color="black" boxSize="10px" />
                            )}
                            <Box color="urbanik.gray.medium" fontSize="2xs">
                              1 Caracter especial
                            </Box>
                          </Stack>
                        </Stack>
                        <Stack direction="row" mt="2">
                          {validateMsg.mayusChar ? (
                            <CheckIcon color="black" boxSize="10px" />
                          ) : (
                            <CloseIcon color="black" boxSize="10px" />
                          )}
                          <Box color="urbanik.gray.medium" fontSize="2xs">
                            1 Letra mayuscula
                          </Box>
                        </Stack>
                      </Box>
                      <Text
                        display={
                          validateMsg.validatePassword ? "none" : "block"
                        }
                        color="#ff4242"
                        fontSize="2xs"
                        fontWeight="bold"
                        mb="-10px"
                      >
                        Las Constraseñas deben de coincidir.
                      </Text>
                      {initialState === false && (
                        <Text
                          display={validateMsg.validateEmail ? "none" : "block"}
                          color="#ff4242"
                          fontSize="2xs"
                          fontWeight="bold"
                        >
                          Introduce un cuenta de correo valida.
                        </Text>
                      )}

                      <Button
                        colorScheme="urbanik"
                        borderRadius="20px"
                        fontWeight="bold"
                        fontSize="15px"
                        mt="2%"
                        boxShadow="3px 3px 5px darkgray"
                        isDisabled={!isFormValid}
                        onClick={(e) => handleSignUp(e)}
                      >
                        Crear Cuenta
                      </Button>
                      <Center>
                        <Box fontSize="15px" my="20px">
                          ¿Ya tienes cuenta?{" "}
                          <Link
                            fontWeight="bold"
                            color="urbanik.orange"
                            href="/login"
                          >
                            Inicia Sesión
                          </Link>
                        </Box>
                      </Center>
                    </Stack>
                  )}
                  {currentStep === 1 && (
                    <Stack
                      spacing={{ base: 8, lg: 100 }}
                      direction={{ base: "column", lg: "row" }}
                      alignSelf="center"
                      px="1vw"
                      pt="10%"
                      mt="5%"
                      h="303px"
                    >
                      {/* Step 1 Form Fields */}
                      <Box
                        bg="urbanik.orange"
                        color="white"
                        boxShadow="3px 3px 5px gray"
                        h="100px"
                        w="110px"
                        borderRadius="15px"
                        px="20px"
                        py="15px"
                        fontSize="xs"
                        cursor="pointer"
                      >
                        <Center>
                          <Stack direction="column" spacing="2px">
                            <FiUser size="50px" />
                            <Box>Persona</Box>
                          </Stack>
                        </Center>
                      </Box>
                      <VStack>
                        <Center>
                          <Box
                            bg="urbanik.gray.light"
                            color="Black"
                            boxShadow="3px 3px 5px gray"
                            h="100px"
                            w="110px"
                            borderRadius="15px"
                            px="20px"
                            py="15px"
                            fontSize="xs"
                          >
                            <Center>
                              <Stack direction="column" spacing="2px">
                                <MdOutlineHomeWork size="50px" />
                                <Box>Empresa</Box>
                              </Stack>
                            </Center>
                          </Box>
                        </Center>
                        <Box fontSize="xs" textAlign="center">
                          Próximamente
                        </Box>
                      </VStack>
                    </Stack>
                  )}
                  {currentStep === 2 && (
                    <VStack spacing={4} align="stretch" h="253px">
                      {/* Step 2 Form Fields */}
                      <Input
                        type="text"
                        name="firstName"
                        isRequired={true}
                        placeholder="Primer Nombre"
                        _placeholder={{ color: "urbanik.gray.medium" }}
                        focusBorderColor="urbanik.orange"
                        variant="flushed"
                        borderColor="lightgray"
                        colorScheme="primary"
                        autoComplete="off"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      <Input
                        type="text"
                        name="middleName"
                        placeholder="Segundo Nombre"
                        _placeholder={{ color: "urbanik.gray.medium" }}
                        focusBorderColor="urbanik.orange"
                        variant="flushed"
                        borderColor="lightgray"
                        colorScheme="primary"
                        autoComplete="off"
                        value={formData.middleName}
                        onChange={handleChange}
                      />
                      <Input
                        type="text"
                        name="firstLastName"
                        isRequired={true}
                        placeholder="Primer Apellido"
                        _placeholder={{ color: "urbanik.gray.medium" }}
                        focusBorderColor="urbanik.orange"
                        variant="flushed"
                        borderColor="lightgray"
                        colorScheme="primary"
                        autoComplete="off"
                        value={formData.firstLastName}
                        onChange={handleChange}
                      />
                      <Input
                        type="text"
                        name="secondLastName"
                        isRequired={true}
                        placeholder="Segundo Apellido"
                        _placeholder={{ color: "urbanik.gray.medium" }}
                        focusBorderColor="urbanik.orange"
                        variant="flushed"
                        borderColor="lightgray"
                        colorScheme="primary"
                        value={formData.secondLastName}
                        onChange={handleChange}
                      />
                      <PhoneNumberInput
                        value={formData.phone}
                        options={countryOptions}
                        country=""
                        placeholder="Numero de Celular"
                        onChange={(value) => setValue(value)}
                      />
                    </VStack>
                  )}
                  {currentStep === 3 && (
                    <VStack spacing={4} align="stretch" h="303px">
                      {/* Step 3 Form Fields */}
                      <Input
                        type="text"
                        name="nationality"
                        isRequired={true}
                        placeholder="Nacionalidad"
                        _placeholder={{ color: "urbanik.gray.medium" }}
                        focusBorderColor="urbanik.orange"
                        variant="flushed"
                        borderColor="lightgray"
                        value={formData.nationality}
                        onChange={handleChange}
                      />
                      <Text
                        fontSize={{ base: "sm", lg: "md" }}
                        fontWeight="bold"
                        color="urbanik.green"
                      >
                        Ubicación/Residencia
                      </Text>
                      <Select
                        placeholder="Selecciona una opción"
                        _placeholder={{
                          color: "urbanik.gray.medium",
                          background: "white",
                        }}
                        focusBorderColor="urbanik.orange"
                        variant="flushed"
                        borderColor="lightgray"
                        size="md"
                        cursor="pointer"
                        name="city"
                        value={selectedCity}
                        onChange={onCityChange}
                      >
                        {cityOptions.map((option) => (
                          <option
                            style={{ background: "white" }}
                            key={option.value}
                            value={option.label}
                          >
                            {option.label}
                          </option>
                        ))}
                      </Select>
                      <Text
                        fontSize={{ base: "sm", lg: "md" }}
                        fontWeight="bold"
                        color="urbanik.green"
                      >
                        Cómo te enteraste de nosotros ?
                      </Text>
                      <Select
                        placeholder="Selecciona una opción"
                        _placeholder={{
                          color: "urbanik.gray.medium",
                          background: "white",
                        }}
                        focusBorderColor="urbanik.orange"
                        variant="flushed"
                        borderColor="lightgray"
                        size="md"
                        cursor="pointer"
                        name="our"
                        value={aboutUs}
                        onChange={onAboutUsChange}
                      >
                        <option style={{ background: "white" }} value={"Redes"}>
                          Redes sociales
                        </option>
                        <option style={{ background: "white" }} value={"Email"}>
                          Email
                        </option>
                        <option
                          style={{ background: "white" }}
                          value={"Referido"}
                        >
                          Referido - Un amigo
                        </option>
                        <option
                          style={{ background: "white" }}
                          value={"Starco"}
                        >
                          Feria Starco
                        </option>
                      </Select>
                      <Flex>
                        <Checkbox
                          colorScheme="urbanik"
                          variant="flushed"
                          borderColor="lightgray"
                          name="dataTreatment"
                          onChange={handleClickPasstd}
                          onClick={handleClickPasstd}
                          mr="2%"
                        />
                        <Text fontSize={{ base: "2xs", lg: "md" }}>
                          Acepto{" "}
                          <Link
                            fontWeight="bold"
                            textDecoration="underline dotted"
                            color="urbanik.gray.medium"
                            href="/login"
                          >
                            Términos y Condiciones + Tratamiento de mis Datos
                            Personales
                          </Link>
                        </Text>
                      </Flex>
                      <Flex>
                        <Checkbox
                          colorScheme="urbanik"
                          variant="flushed"
                          borderColor="lightgray"
                          name="emailInfo"
                          onChange={handleClickPassed}
                          mr="2%"
                        />
                        <Text fontSize={{ base: "2xs", lg: "md" }}>
                          Acepto el envio de información sobre inversiones de la
                          plataforma Urbanik
                        </Text>
                      </Flex>
                    </VStack>
                  )}
                  {currentStep === 4 && (
                    <VStack
                      spacing={4}
                      align="stretch"
                      textAlign="center"
                      h="303px"
                    >
                      {/* Step 5 Form Fields *}*/}
                      <Box color="urbanik.green" fontSize={35} mt="60px">
                        Felicitaciones
                      </Box>
                      <Box color="urbanik.green" fontSize={15}>
                        Has completado tu registro con éxito
                      </Box>
                      <Box color="urbanik.orange" mb="30px">
                        <Center>
                          <MdOutlineCheckCircle size="150px" />
                        </Center>
                      </Box>
                      <Center>
                        <Box
                          color="urbanik.green"
                          fontSize={15}
                          mb={{ base: "20px", lg: "60px" }}
                          w={{ base: "75%", lg: "50%" }}
                        >
                          Puedes ingresar a tu cuenta y ver el tablero de
                          inversión en modo pruebas (Sandbox)
                        </Box>
                      </Center>
                      <Center>
                        <Button
                          w={{ base: "90%", lg: "50%" }}
                          borderRadius="25px"
                          bg="urbanik.orange"
                          color="white"
                          boxShadow="2px 2px 5px gray"
                          _hover={{
                            bg: "#ffffffbf",
                            color: "urbanik.orange",
                            border: "2px solid",
                            borderColor: "urbanik.orange",
                          }}
                        >
                          <NextLink href={"/login"}>Ingresar</NextLink>
                        </Button>
                      </Center>
                    </VStack>
                  )}
                  {currentStep === null && (
                    <VStack spacing={4} align="stretch" h="406px">
                      {/* Step 4 Form Fields */}
                      <Box color="urbanik.orange" my="45px">
                        <Center>
                          <TbMailDown size="150px" />
                        </Center>
                      </Box>
                      <Box
                        color="urbanik.green"
                        fontSize={17}
                        textAlign={{ base: "left", lg: "center" }}
                      >
                        Te enviaremos un mensaje de confirmación a tu correo
                        electrónico.
                      </Box>
                      <Box
                        color="urbanik.green"
                        fontSize={12}
                        textAlign={{ base: "left", lg: "center" }}
                      >
                        Continua para terminar el proceso
                      </Box>
                    </VStack>
                  )}
                  <Stack
                    direction="row"
                    display={currentStep == 0 ? "none" : "flex"}
                    mb="3%"
                  >
                    <Spacer />
                    {currentStep < 4 && (
                      <>
                        <Stack direction="column">
                          <Center>
                            <Stepper
                              index={currentStep}
                              colorScheme="urbanikGreen"
                            >
                              {steps.map((label) => (
                                <Step key={label}>
                                  <StepIndicator
                                    boxSize="10px"
                                    borderColor="urbanik.green"
                                  />
                                </Step>
                              ))}
                            </Stepper>
                          </Center>
                          <Box fontSize="10px">
                            Paso {currentStep} de {steps.length}
                          </Box>
                        </Stack>
                        <Spacer />
                      </>
                    )}
                    {currentStep < 3 && (
                      <Button
                        colorScheme="urbanik"
                        color="urbanik.orange"
                        p="0"
                        h="45px"
                        w="45px"
                        mr="5%"
                        ml="-25%"
                        boxShadow="2px 2px 3px gray"
                        borderRadius="15px"
                        variant="outline"
                        display={currentStep < 5 ? "flex" : "none"}
                        onClick={
                          currentStep <= steps.length
                            ? handleNextStep
                            : undefined
                        }
                        disabled={currentStep === steps.length + 1}
                        _hover={{ bg: "urbanik.orange", color: "white" }}
                      >
                        <MdArrowForward size="25px" />
                      </Button>
                    )}
                    {currentStep === steps.length && (
                      <Button
                        type="submit"
                        colorScheme="urbanik"
                        color="urbanik.orange"
                        p="0"
                        h="45px"
                        w="45px"
                        mr="5%"
                        ml="-25%"
                        boxShadow="2px 2px 3px gray"
                        borderRadius="15px"
                        variant="outline"
                        onClick={
                          currentStep <= steps.length ? undefined : undefined
                        }
                        disabled={currentStep === steps.length + 1}
                        _hover={{ bg: "urbanik.orange", color: "white" }}
                      >
                        <MdArrowForward size="25px" />
                      </Button>
                    )}
                  </Stack>
                  <HStack position="absolute" top="30px" right="30px">
                    <Button
                      colorScheme="urbanikG"
                      variant="outline"
                      onClick={currentStep > 0 ? handlePreviousStep : undefined}
                      disabled={currentStep === 0}
                      w="50px"
                    >
                      {"<-"}
                    </Button>
                    <Button
                      colorScheme="urbanikG"
                      variant="outline"
                      onClick={currentStep < 4 ? handleNextStept : undefined}
                      w="50px"
                    >
                      {"->"}
                    </Button>
                  </HStack>
                </VStack>
              </Center>
            </form>
          </Stack>
        </Stack>
      </PageTransition>
    </Box>
  );
};

export default Login;

export const getStaticProps = () => {
  return {
    props: {
      header: {
        display: "none",
      },
      footer: {
        display: "none",
      },      
      webNav:{
        display: 'none',
      }
    },
  };
};
