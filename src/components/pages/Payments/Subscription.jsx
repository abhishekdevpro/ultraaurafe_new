import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import styled from "styled-components";
import Header from "../../header";
// import UserHeader2 from "../../Layout/Header2";

// Styled Components
const Container = styled.div`
  padding: 1rem;
  max-width: 64rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const Card = styled.div`
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

const SubTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const InfoBox = styled.div`
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  background-color: #f9fafb;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const InfoSection = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Divider = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: block;
    border-left: 1px solid #e5e7eb;
    height: 6rem;
    margin: 0 1.5rem;
  }
`;

const AccountSection = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #e5e7eb;
`;

const SectionHeader = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
`;

const Text = styled.p`
  color: #4b5563;
`;

const StatusText = styled.span`
  font-weight: 500;
  color: ${props => props.active ? "#059669" : "#dc2626"};
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 1.25rem;
  color: #4b5563;
`;

const ListItem = styled.li`
  font-size: ${props => props.small ? "0.9375rem" : "1rem"};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  margin-top: 0.75rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background-color: ${props => {
    if (props.disabled) return "#9ca3af";
    if (props.danger) return "#dc2626";
    return "#2563eb";
  }};
  color: white;
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  
  &:hover {
    background-color: ${props => {
      if (props.disabled) return "#9ca3af";
      if (props.danger) return "#b91c1c";
      return "#1d4ed8";
    }};
  }
  
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const Link = styled.a`
  color: #2563eb;
  cursor: pointer;
`;

const DetailsContainer = styled.div`
  margin-top: 1.5rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 0.75rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export default function Subscription() {
  const [status, setStatus] = useState("Inactive");
  const [accountId, setAccountId] = useState();
  const [userData, setUserData] = useState(null);
  

  useEffect(() => {
    setAccountId(localStorage.getItem("ID"));
  }, []);

  const handleCancelSubscription = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Unauthorized. Please log in.");
        return;
      }

      const response = await axios.post(
        "https://api.novajobs.us/api/students/payment/cancel-subscription",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Your subscription has been canceled.");
      } else {
        toast.error(response.data.message || "Failed to cancel the subscription.");
      }
    } catch (error) {
      console.error("Error canceling subscription:", error);
      if (error.response?.status === 401) {
        toast.error("Session expired. Please log in again.");
        localStorage.removeItem("token");
        window.location.href = "/login";
      } else {
        toast.error(error.response?.data?.message || "An error occurred. Please try again later.");
      }
    }
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await axios.get(
          "https://api.novajobs.us/api/students/profile",
          {
            headers: { Authorization: token },
          }
        );

        if (response.data?.status === "success") {
          const userData = response.data.data;
          setUserData(userData);
          setStatus(userData.is_active_plan ? "Active" : "Inactive");
        }
      } catch (err) {
        console.error("Error fetching user profile:", err);
        setStatus("Inactive");
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Title>Account Settings</Title>

        <Card>
          <SubTitle>Subscription</SubTitle>

          <InfoBox>
            <InfoSection>
              <Text style={{ fontWeight: 600, color: "#1f2937" }}>
                Need help or want to change your subscription?
              </Text>
              <Text style={{ marginTop: "0.5rem" }}>Contact us at:</Text>
              <List>
                <ListItem small>📧 customersupport@novajobs.us</ListItem>
              </List>
            </InfoSection>

            <Divider />

            <InfoSection>
              <Text style={{ fontWeight: 600, color: "#1f2937" }}>Available days a week:</Text>
              <List>
                <ListItem>Monday-Friday: 8 AM - 8 PM (IST)</ListItem>
                <ListItem>Saturday: 8 AM - 5 PM (IST)</ListItem>
              </List>
            </InfoSection>
          </InfoBox>

          <AccountSection>
            <Text style={{ fontWeight: 600, color: "#111827" }}>
              Account ID:{" "}
              <span style={{ color: "#4b5563", fontWeight: 500 }}>
                {accountId || 618744350}
              </span>
            </Text>
          </AccountSection>

          <DetailsContainer>
            <SectionHeader>Subscription details</SectionHeader>
            <FlexContainer>
              <Text>
                Status:{" "}
                <StatusText active={status === "Active"}>
                  {status}
                </StatusText>
              </Text>

              <ButtonContainer>
                <Link href="/payment-plans">
                  <Button>Upgrade</Button>
                </Link>
                <Button
                  danger
                  disabled={userData?.plan_id === 1 || !userData?.is_active_plan}
                  onClick={handleCancelSubscription}
                >
                  Cancel Subscription
                </Button>
              </ButtonContainer>
            </FlexContainer>

            <Text style={{ marginTop: "0.5rem" }}>
              Current Plan:{" "}
              {userData?.plan_id ? (
                <span style={{ fontWeight: 500 }}>
                  {userData.plan_id === 1 && "Free Plan"}
                  {userData.plan_id === 2 && "Single Pass"}
                  {userData.plan_id === 3 && "AI Pro Month"}
                  {userData.plan_id === 4 && "AI Pro Yearly"}
                </span>
              ) : (
                "N/A"
              )}
            </Text>

            <Text style={{ marginTop: "1rem" }}>
              For more information or changes to your subscription, contact us at
              <Link href="mailto:customersupport@novajobs.us">
                {" "}
                customersupport@novajobs.us
              </Link>
              .
            </Text>
          </DetailsContainer>
        </Card>
      </Container>
    </>
  );
}
