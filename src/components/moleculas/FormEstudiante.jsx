import React from 'react';
import styled from 'styled-components';

const FormEstudiante = () => {
  return (
    
      <FormWrapper>
        <Title>Sign Up</Title>
        <Form>
          <InputWrapper>
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
          </InputWrapper>
          <Input type="email" placeholder="Email" />
          <Input type="email" placeholder="Confirm Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
          <Label htmlFor="gender">Gender</Label>
          <Select id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
          <Label htmlFor="age">Age</Label>
          <Input type="date" id="age" />
          <Text>
            Already have an account? <LoginLink href="#">Login</LoginLink>
          </Text>
          <SubmitButton type="submit">Sign Up</SubmitButton>
        </Form>
      </FormWrapper>
    
  );
};

const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  background: #2d3748;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #e2e8f0;
  margin-bottom: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  background: #4a5568;
  color: #e2e8f0;
  border: none;
  border-radius: 8px;
  padding: 12px;
  width: 100%;
  transition: background 0.3s ease;

  &:focus {
    background: #2d3748;
    outline: none;
    box-shadow: 0 0 0 2px #63b3ed;
  }

  &::placeholder {
    color: #a0aec0;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const Label = styled.label`
  font-size: 14px;
  color: #e2e8f0;
  margin-bottom: 8px;
`;

const Select = styled.select`
  background: #4a5568;
  color: #e2e8f0;
  border: none;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
  transition: background 0.3s ease;

  &:focus {
    background: #2d3748;
    outline: none;
    box-shadow: 0 0 0 2px #63b3ed;
  }
`;

const Text = styled.p`
  color: #e2e8f0;
  margin-top: 16px;
`;

const LoginLink = styled.a`
  color: #63b3ed;
  font-size: 14px;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(to right, #667eea, #764ba2);
  color: white;
  font-weight: bold;
  padding: 12px;
  border: none;
  border-radius: 8px;
  margin-top: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #5a67d8, #6b46c1);
  }
`;

export default FormEstudiante;
