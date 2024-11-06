/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Switch,
} from "@chakra-ui/react";
import { useState } from "react";
import { useCompanyContext } from "../contexts/CompanyContext";

const EditCompanyModal = ({ isOpen, onClose }) => {
  const { companyDetails, updateCompanyDetails } = useCompanyContext();
  const [formData, setFormData] = useState({
    name: companyDetails?.name || "",
    email: companyDetails?.email || "",
    address: companyDetails?.address || "",
    phoneNumber: companyDetails?.phoneNumber || "",
    active: companyDetails?.active || false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSwitchChange = (e) => {
    const { checked } = e.target;
    setFormData((prevData) => ({ ...prevData, active: checked }));
  };

  const handleSubmit = () => {
    updateCompanyDetails(companyDetails.id, formData);
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent fontFamily={"IBM Plex Sans"}>
          <ModalHeader>Edit Company</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="name" mb={4}>
              <FormLabel>Company Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter company name"
              />
            </FormControl>

            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter company email"
                readOnly={true}
              />
            </FormControl>

            <FormControl id="address" mb={4}>
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter company address"
              />
            </FormControl>

            <FormControl id="phoneNumber" mb={4}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter company phone number"
              />
            </FormControl>

            <FormControl display="flex" alignItems="center" mb={4}>
              <FormLabel htmlFor="active" mb="0">
                Active
              </FormLabel>
              <Switch
                id="active"
                name="active"
                isChecked={formData.active}
                onChange={handleSwitchChange}
                colorScheme="green"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="primary" ml={3} onClick={handleSubmit}>
              Save Changes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditCompanyModal;
