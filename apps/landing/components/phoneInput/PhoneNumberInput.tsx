import React, { useState, useEffect, ChangeEvent } from "react";
import {
  Box,
  Flex,
  Input,
  Select,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react";
import { PhoneIcon, ChevronDownIcon } from '@chakra-ui/icons'
import Flag from "react-world-flags";
import { AsYouType } from "libphonenumber-js";
import { getCountryTelCode } from "./countries";


interface Option {
  value: string;
  label: string;
}

interface PhoneNumberInputProps {
  size?: string;
  value: string;
  country: string;
  options?: Option[];
  onChange: (value: string) => void;
  placeholder?: string;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  size = "md",
  value,
  country,
  options = [],
  onChange,
  placeholder,
  ...rest
}) => {
  const [number, setNumber] = useState<string>(value || "");
  const [selectedCountry, setSelectedCountry] = useState<string>(country || "");
  const [countryCode, setCountryCode] = useState<string>(
    getCountryTelCode(country) || ""
  );

  useEffect(() => {
    setSelectedCountry(country);
    setCountryCode(getCountryTelCode(country));
  }, [country]);

  const onCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const code = getCountryTelCode(value);
    const parsedNumber = new AsYouType().input(`${code}${number}`);

    setCountryCode(code);
    setSelectedCountry(value);
    onChange(parsedNumber);
  };

  const onPhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {

    const value = e.target.value;
    const validatedValue = value.replace(/[^0-9]/g, '')
    const parsedNumber = new AsYouType().input(`${countryCode}${value}`);

    setNumber(validatedValue);
    onChange(parsedNumber);
  };

  return (
    <InputGroup size={size} {...rest}>
      <InputLeftElement width="4rem">
        <Select
          top="0"
          left="0"
          zIndex={1}
          bottom={0}
          opacity={0}
          position="absolute"
          value={selectedCountry}
          onChange={onCountryChange}
          color='black'
          cursor='pointer'
        >
          <option style={{ background: 'white' }} value="" />
          {options.map(option => (
            <option style={{ background: 'white' }} key={option.value} value={option.value}>
              <Flag height="2px" code={option.value || ""} />
              {option.label}
              </option>
          ))}
        </Select>
        <Flex pl={2} width="100%" alignItems="left">
          {selectedCountry ? (
            <Box mr="25px" flex={2}>
              {getCountryTelCode(selectedCountry)}
            </Box>
          ) : (
            <PhoneIcon /> 
          )}
        </Flex>
      </InputLeftElement>
      <Input type='tel'
        inputMode="numeric"
        pl="4rem"
        value={number}
        pattern="[0-9\s]{13,19}"
        placeholder={placeholder} _placeholder={{color:'urbanik.gray.medium'}}
        onChange={onPhoneNumberChange}
        focusBorderColor='urbanik.orange' variant='flushed' borderColor='lightgray'
        isRequired={true} maxLength={10}
      />
    </InputGroup>
  );
};

PhoneNumberInput.defaultProps = {
  options: [],
  size: "md"
};

export default PhoneNumberInput;