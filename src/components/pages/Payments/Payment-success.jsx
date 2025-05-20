import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import styled from 'styled-components';
import axios from 'axios';

// Styled components for the success page
const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SuccessCard = styled.div`
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
  background-color: #ecfdf5;
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
  margin-bottom: 2rem;
  line-height: 1.6;
`;

// const OrderDetails = styled.div`
//   background-color: #f9fafb;
//   border-radius: 0.75rem;
//   padding: 1.5rem;
//   margin-bottom: 2rem;
//   text-align: left;
// `;

// const DetailRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 0.75rem;
  
//   &:last-child {
//     margin-bottom: 0;
//     padding-top: 0.75rem;
//     border-top: 1px solid #e5e7eb;
//   }
// `;

// const DetailLabel = styled.span`
//   font-size: 0.9375rem;
//   color: #6b7280;
// `;

// const DetailValue = styled.span`
//   font-size: 0.9375rem;
//   color: #111827;
//   font-weight: ${props => props.bold ? '600' : '400'};
// `;

const Button = styled.button`
  background-color: #2563eb;
  color: white;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
  margin-top: 1rem;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const InfoText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 1.5rem;
`;

export default function PaymentSuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const BASE_URL = "https://api.novajobs.us";
  console.log(orderDetails);
  useEffect(() => {
    // Extract session_id or payment reference from URL parameters
    const params = new URLSearchParams(location.search);
    const sessionId = params.get('session_id');
    const paymentId = params.get('payment_id');
    
    if (sessionId || paymentId) {
      // Fetch payment details from your backend
      const fetchPaymentDetails = async () => {
        try {
          const token = localStorage.getItem("token");
          if (!token) {
            navigate('/login2');
            return;
          }
          
          const response = await axios.get(
            `${BASE_URL}/api/students/payment/success?${sessionId ? `session_id=${sessionId}` : `payment_id=${paymentId}`}`,
            {
              headers: {
                Authorization: token,
              },
            }
          );
          
          if (response.status === 200) {
            setOrderDetails(response.data);
          } else {
            throw new Error("Failed to fetch payment details");
          }
        } catch (error) {
          console.error("Payment verification error:", error);
          // Optionally redirect to failure page if the verification fails
          // navigate('/payment/failure');
        } finally {
          setLoading(false);
        }
      };
      
      fetchPaymentDetails();
    } else {
      // If no session_id or payment_id, show sample data
      setOrderDetails({
        plan: {
          name: "Elevate",
          price: "18.95"
        },
        transaction_id: "TXN_123456789",
        purchase_date: new Date().toLocaleDateString(),
        payment_method: "Credit Card",
        next_billing_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString() // 30 days from now
      });
      setLoading(false);
    }
  }, [location, navigate]);

  const goToDashboard = () => {
    navigate('/student/student-dashboard');
  };

  if (loading) {
    return (
      <PageContainer>
        <SuccessCard>
          <Title>Verifying your payment...</Title>
          <Message>Please wait while we verify your payment details.</Message>
        </SuccessCard>
      </PageContainer>
    );
  }

  return (
    <div className='bg-white'>
      <PageContainer>
      <SuccessCard>
        <IconContainer>
          <CheckCircle color="#10b981" size={40} />
        </IconContainer>
        
        <Title>Payment Successful!</Title>
        <Message>
          Thank you for your purchase. Your payment has been successfully processed 
          and your subscription is now active.
        </Message>
        
        {/* {orderDetails && (
          <OrderDetails>
            <DetailRow>
              <DetailLabel>Plan</DetailLabel>
              <DetailValue>{orderDetails.plan.name}</DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>Amount</DetailLabel>
              <DetailValue>${orderDetails.plan.price}</DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>Transaction ID</DetailLabel>
              <DetailValue>{orderDetails.transaction_id}</DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>Purchase Date</DetailLabel>
              <DetailValue>{orderDetails.purchase_date}</DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>Payment Method</DetailLabel>
              <DetailValue>{orderDetails.payment_method}</DetailValue>
            </DetailRow>
            {orderDetails.next_billing_date && (
              <DetailRow>
                <DetailLabel>Next Billing Date</DetailLabel>
                <DetailValue bold>{orderDetails.next_billing_date}</DetailValue>
              </DetailRow>
            )}
          </OrderDetails>
        )} */}
        
        <Button onClick={goToDashboard}>Go to Dashboard</Button>
        
        <InfoText>
          A confirmation email with your receipt has been sent to your registered email address.
        </InfoText>
      </SuccessCard>
    </PageContainer>
    </div>
  );
}
