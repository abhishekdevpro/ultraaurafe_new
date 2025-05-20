import { useNavigate, useLocation } from 'react-router-dom';
import { XCircle } from 'lucide-react';
import styled from 'styled-components';

// Styled components for the failure page
const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FailureCard = styled.div`
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 600px;
  width: 100%;
  text-align: center;
  padding: 3rem 2rem;
`;

const IconContainer = styled.div`
  background-color: #fee2e2;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 1.5rem auto;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #111827;
`;

const Message = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ErrorBox = styled.div`
  background-color: #f9fafb;
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-bottom: 2rem;
  text-align: left;
  border-left: 4px solid #ef4444;
`;

const ErrorCode = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
`;

const ErrorMessage = styled.p`
  font-size: 1rem;
  color: #111827;
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const PrimaryButton = styled.button`
  background-color: #2563eb;
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
  flex: 1;
  white-space: nowrap;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const SecondaryButton = styled.button`
  background-color: white;
  color: #4b5563;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
  flex: 1;

  &:hover {
    background-color: #f9fafb;
  }
`;

const SupportInfo = styled.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
`;

const SupportText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
`;

const SupportLink = styled.a`
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default function PaymentFailurePage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract error code and message from URL parameters
  const params = new URLSearchParams(location.search);
  const errorCode = params.get('error_code') || 'payment_failed';
  const errorMessage = params.get('error_message') || 'Your payment could not be processed. Please try again or use a different payment method.';
  
  const tryAgain = () => {
    navigate('/payment-plans');
  };
  
  const goToPlans = () => {
    navigate('/payment-plans');
  };
  
  const contactSupport = () => {
    // You can replace this with your actual support contact link
    window.open('mailto:support@novajobs.us', '_blank');
  };
  
  return (
    <PageContainer>
      <FailureCard>
        <IconContainer>
          <XCircle color="#ef4444" size={40} />
        </IconContainer>
        
        <Title>Payment Failed</Title>
        <Message>
          We are sorry, but we couldnt process your payment. 
          This could be due to insufficient funds, incorrect card information, 
          or a temporary issue with the payment provider.
        </Message>
        
        <ErrorBox>
          <ErrorCode>Error Code: {errorCode}</ErrorCode>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </ErrorBox>
        
        <ButtonContainer>
          <PrimaryButton onClick={tryAgain}>Try Again</PrimaryButton>
          <SecondaryButton onClick={goToPlans}>Change Plan</SecondaryButton>
        </ButtonContainer>
        
        <SupportInfo>
          <SupportText>
            Need help with your payment? Our team is ready to assist you.
          </SupportText>
          <SupportLink href="#" onClick={contactSupport}>
            Contact Customer Support
          </SupportLink>
        </SupportInfo>
      </FailureCard>
    </PageContainer>
  );
}