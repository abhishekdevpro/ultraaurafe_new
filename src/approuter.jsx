import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import BlogDetails from "./components/blog/blogDetails";
import BlogGrid from "./components/blog/blogGrid";
import BlogList from "./components/blog/bloglist";
import BlogMasonry from "./components/blog/blogMasonry";
import BlogModern from "./components/blog/blogModern";
import Cart from "./components/pages/cart";
import JobCategory from "./components/pages/category";
import Checkout from "./components/pages/checkout";
import AddCourse from "./components/pages/course/addCourse";
import CourseDetails from "./components/pages/course/courseDetails";
import CourseDetails1 from "./components/pages/course/courseDetails1";
import CourseDetails2 from "./components/pages/course/courseDetails2";
import CourseGrid from "./components/pages/course/courseGrid";
import CourseLesson from "./components/pages/course/courseLesson";
import CourseList from "./components/pages/course/courseList";
import ComingSoon from "./components/pages/error/comingSoon";
import Error404 from "./components/pages/error/error404";
import Error500 from "./components/pages/error/error500";
import UnderConstruction from "./components/pages/error/underConstruction";
import Faq from "./components/pages/faq";
import ForgotPassword from "./components/pages/forgotPassword";
import Login from "./components/pages/login";
import Notification from "./components/pages/notification";
import PrivacyPolicy from "./components/pages/policy";
import PricingPlan from "./components/pages/pricingPlan";
import PricingPlan2 from "./components/pages/pricingPlan/pricingPlan2";
import Register from "./components/pages/register";
import RegisterOne from "./components/pages/register/register1";
import RegisterTwo from "./components/pages/register/register2";
import RegisterThree from "./components/pages/register/register3";
import RegisterFour from "./components/pages/register/register4";
import RegisterFive from "./components/pages/register/register5";
import Support from "./components/pages/support";
import TermsCondition from "./components/pages/termsCondition";
import Wishlist from "./components/pages/wishlist";

import { Home } from "./components/home";
import { Home2 } from "./components/home2";
import { Home3 } from "./components/home3";
import { Home4 } from "./components/home4";
import { Dashboard } from "./components/instructor/dashboard";
import { InstructorList } from "./components/instructor/list";
import InstructorGrid from "./components/instructor/grid";
import InstructorReviews from "./components/instructor/reviews";
import InstructorEarnings from "./components/instructor/earnings";
import InstructorOrders from "./components/instructor/orders";
import InstructorPayouts from "./components/instructor/payouts";
import InstructorEditProfile from "./components/instructor/editProfile";
import InstructorSecurity from "./components/instructor/security";
import InstructorSocialProfile from "./components/instructor/socialProfiles";

import InstructorChat from "./components/instructor/instructorChat";
import InstructorDeleteProfile from "./components/instructor/deleteProfile";
import InstructorEdit from "./components/instructor/edit";
import InstructorGrid2 from "./components/instructor/grid2";
import InstructorLinkedAccount from "./components/instructor/linkedAccount";
import InstructorNewTickets from "./components/instructor/newTickets";
import InstructorProfile from "./components/instructor/profile";
import InstructorProfilePrivacy from "./components/instructor/profilePrivacy";
import InstructorStudentGrid from "./components/instructor/studentGrid";
import InstructorStudentList from "./components/instructor/studentList";
import StudentEditProfile from "./components/student/editProfile";
import StudentAccounts from "./components/student/accounts";
import StudentBilling from "./components/student/billing";
import StudentDeleteProfile from "./components/student/deleteProfile";
import StudentInvoice from "./components/student/invoice";

import StudentPayment from "./components/student/payment";
import StudentPrivacy from "./components/student/privacy";
import StudentSecurity from "./components/student/security";

import StudentSubscription from "./components/student/subscription";
import StudentNewTickets from "./components/student/newTickets";

import StudentViewTickets from "./components/student/viewTickets";
import StudentsGrid from "./components/student/grid";
import StudentsGrid2 from "./components/student/grid2";
import StudentsList from "./components/student/list";
import InstructorDepositDashboard from "./components/instructor/deposit";
import StudentDepositDashboard from "./components/student/depositDashboard";
import WithdrawalInstructor from "./components/instructor/withdrawalInstructor";
import DepositInstructor from "./components/instructor/depositInstructor";
import TransactionInstructor from "./components/instructor/transactionInstructor";
import DepositStudent from "./components/student/depositStudent";
import TransactionStudent from "./components/student/transactionStudent";

import CourseMessage from "./components/student/courseMessage";
import CourseWishlist from "./components/student/courseWishlist";
import CourseStudent from "./components/student/courseStudent";
import PurchaseHistory from "./components/student/purchaseHistory";
import ViewInvoice from "./components/student/invoice/viewInvoice";
import NewPassword from "./components/pages/newPassword";
import DashboardProfile from "./components/instructor/dashboardProfile";
import InstructorEnrolledCource from "./components/instructor/instructorEnrolledCourse";
import InstructorWishlist from "./components/instructor/instructorWishlist.jsx";
import InstructorSettings from "./components/instructor/settings/instructorSettings";
import InstructorChangePassword from "./components/instructor/settings/instructorChangePassword";
import InstructorSettingNotifications from "./components/instructor/settings/instructorSettingNotifications";
import InstructorQuiz from "./components/instructor/instructorQuiz/index.jsx";
import InstructorQA from "./components/instructor/instructorQA/index.jsx";
import InstructorReferral from "./components/instructor/instructorReferral/index.jsx";
import InstructorQuizAttampts from "./components/instructor/instructorQuizAttempts/index.jsx";
import InstructorWithdraw from "./components/instructor/instructorWithdraw/index.jsx";
import InstructorNotification from "./components/instructor/instructorNotification/index.jsx";
import InstructorAssignment from "./components/instructor/instructorAssignment/index.jsx";
import InstructorAnnouncement from "./components/instructor/instructorAnnouncement/index.jsx";
import InstructorTicket from "./components/instructor/instructorTicket/index.jsx";
import StudentCourses from "./components/student/studentCourses/index.jsx";
import InstructorSettingWithdraw from "./components/instructor/settings/instructorSettingWithdraw.jsx";
import InstructorDeleteAccount from "./components/instructor/settings/instructorDeleteAccount.jsx";
import StudentDashboard from "./components/student/studentDashboard/index.jsx";
import StudentProfile from "./components/student/studentProfile/index.jsx";
import InstructorCourse from "./components/instructor/instructorCourse/index.jsx";
import StudentWishlist from "./components/student/studentWishlist/index.jsx";
import StudentReviews from "./components/student/studentReviews/index.jsx";
import StudentQuiz from "./components/student/studentQuiz/index.jsx";
import StudentOrderHistory from "./components/student/studentOrderHistory/index.jsx";
import StudentQA from "./components/student/studentQA/index.jsx";
import StudentReferral from "./components/student/studentReferral/index.jsx";
import StudentMessages from "./components/student/studentMessages/index.jsx";
import StudentLinkedAccounts from "./components/student/setting/studentLinkedAccount.jsx";
import StudentNotification from "./components/student/setting/studentNotification.jsx";
import StudentSocialProfile from "./components/student/setting/studentSocialProfile.jsx";
import StudentChangePassword from "./components/student/setting/studentChangePassword.jsx";
import StudentSetting from "./components/student/setting/studentSetting.jsx";
import StudentTicket from "./components/student/studentTicket/index.jsx";
import InstructorQuizDetails from "./components/instructor/instructorQuiz/instructorQuizDetails.jsx";
import StudentQuizDetails from "./components/student/studentQuiz/studentQuizDetails.jsx";

const Approuter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3" element={<Home3 />} />
        <Route path="/home4" element={<Home4 />} />

        {/* Blog */}
        <Route path="/blog-list" element={<BlogList />} />
        <Route path="/blog-grid" element={<BlogGrid />} />
        <Route path="/blog-masonry" element={<BlogMasonry />} />
        <Route path="/blog-modern" element={<BlogModern />} />
        <Route path="/blog-details" element={<BlogDetails />} />

        {/* Pages */}
        <Route path="/page-notification" element={<Notification />} />
        <Route path="/pricing-plan" element={<PricingPlan />} />
        <Route path="/pricing-plan2" element={<PricingPlan2 />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/course-grid" element={<CourseGrid />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/course-details1" element={<CourseDetails1 />} />
        <Route path="/course-details2" element={<CourseDetails2 />} />
        <Route path="/course-lesson" element={<CourseLesson />} />
        <Route path="/come-soon" element={<ComingSoon />} />
        <Route path="/error-404" element={<Error404 />} />
        <Route path="/error-500" element={<Error500 />} />
        <Route path="/under-construction" element={<UnderConstruction />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/support" element={<Support />} />
        <Route path="/job-category" element={<JobCategory />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register1" element={<RegisterOne />} />
        <Route path="/register2" element={<RegisterTwo />} />
        <Route path="/register3" element={<RegisterThree />} />
        <Route path="/register4" element={<RegisterFour />} />
        <Route path="/register5" element={<RegisterFive />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/term-condition" element={<TermsCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/setting-edit-profile" element={<StudentEditProfile />} />

        <Route path="/view-invoice" element={<ViewInvoice />} />

        <Route path="/setting-student-payment" element={<StudentPayment />} />
        <Route path="/setting-student-privacy" element={<StudentPrivacy />} />
        <Route path="/setting-student-referral" element={<StudentReferral />} />
        <Route path="/setting-student-security" element={<StudentSecurity />} />

        <Route
          path="/setting-student-subscription"
          element={<StudentSubscription />}
        />
        <Route
          path="/setting-support-new-tickets"
          element={<StudentNewTickets />}
        />

        <Route
          path="/setting-support-view-tickets"
          element={<StudentViewTickets />}
        />
        <Route
          path="/deposit-student-dashboard"
          element={<StudentDepositDashboard />}
        />
        <Route path="/students-grid" element={<StudentsGrid />} />
        <Route path="/students-grid2" element={<StudentsGrid2 />} />
        <Route path="/students-list" element={<StudentsList />} />
        <Route path="/course-student" element={<CourseStudent />} />

        <Route path="/course-wishlist" element={<CourseWishlist />} />
        <Route path="/course-message" element={<CourseMessage />} />
        <Route path="/purchase-history" element={<PurchaseHistory />} />

        {/* instructor routes starts */}
        <Route
          path="/instructor/instructor-list"
          element={<InstructorList />}
        />
        <Route
          path="/instructor/instructor-grid"
          element={<InstructorGrid />}
        />

        <Route
          path="/instructor/instructor-dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/instructor/instructor-list"
          element={<InstructorList />}
        />
        <Route
          path="/instructor/instructor-grid"
          element={<InstructorGrid />}
        />

        <Route
          path="/instructor/instructor-payouts"
          element={<InstructorPayouts />}
        />
       
        <Route
          path="/instructor/instructor-profile"
          element={<InstructorProfile />}
        />
        <Route
          path="/instructor/instructor-enrolled-course"
          element={<InstructorEnrolledCource />}
        />
        <Route
          path="/instructor/instructor-wishlist"
          element={<InstructorWishlist />}
        />
        <Route
          path="/instructor/instructor-edit-profile"
          element={<InstructorEditProfile />}
        />
        <Route
          path="/instructor/instructor-security"
          element={<InstructorSecurity />}
        />
        <Route
          path="/instructor/instructor-social-profile"
          element={<InstructorSocialProfile />}
        />

        <Route
          path="/instructor/instructor-chat"
          element={<InstructorChat />}
        />
        <Route
          path="/instructor/instructor-notifications"
          element={<InstructorNotification />}
        />

        <Route
          path="/instructor/instructor-delete-profile"
          element={<InstructorDeleteProfile />}
        />
        <Route
          path="/instructor/deposit-instructor-dashboard"
          element={<InstructorDepositDashboard />}
        />
        <Route
          path="/instructor/withdrawal-instructor"
          element={<WithdrawalInstructor />}
        />
        <Route
          path="/instructor/deposit-instructor"
          element={<DepositInstructor />}
        />
        <Route
          path="/instructor/transactions-instructor"
          element={<TransactionInstructor />}
        />
        <Route
          path="/instructor/instructor-edit"
          element={<InstructorEdit />}
        />
        <Route
          path="/instructor/instructor-grid-2"
          element={<InstructorGrid2 />}
        />
        <Route
          path="/instructor/instructor-linked-account"
          element={<InstructorLinkedAccount />}
        />
        <Route
          path="/instructor/instructor-new-tickets"
          element={<InstructorNewTickets />}
        />
        <Route
          path="/instructor/instructor-profile-privacy"
          element={<InstructorProfilePrivacy />}
        />
        <Route
          path="/instructor/instructor-student-grid"
          element={<InstructorStudentGrid />}
        />
        <Route
          path="/instructor/instructor-student-list"
          element={<InstructorStudentList />}
        />
        <Route
          path="/instructor/instructor-profiles"
          element={<DashboardProfile />}
        />
        <Route
          path="/instructor/instructor-settings"
          element={<InstructorSettings />}
        />
        <Route
          path="/instructor/instructor-earnings"
          element={<InstructorEarnings />}
        />
        <Route
          path="/instructor/instructor-change-password"
          element={<InstructorChangePassword />}
        />
        <Route
          path="/instructor/instructor-setting-notifications"
          element={<InstructorSettingNotifications />}
        />
        <Route
          path="/instructor/instructor-reviews"
          element={<InstructorReviews />}
        />
        <Route
          path="/instructor/instructor-quiz"
          element={<InstructorQuiz />}
        />
        <Route
          path="/instructor/instructor-quiz-details"
          element={<InstructorQuizDetails />}
        />
        <Route
          path="/instructor/instructor-orders"
          element={<InstructorOrders />}
        />
        <Route path="/instructor/instructor-qa" element={<InstructorQA />} />
        <Route
          path="/instructor/instructor-referral"
          element={<InstructorReferral />}
        />
        <Route
          path="/instructor/instructor-setting-withdraw"
          element={<InstructorSettingWithdraw />}
        />
        <Route
          path="/instructor/instructor-delete-account"
          element={<InstructorDeleteAccount />}
        />

        <Route
          path="/instructor/instructor-quiz-attempts"
          element={<InstructorQuizAttampts />}
        />
        <Route
          path="/instructor/instructor-withdraw"
          element={<InstructorWithdraw />}
        />
        <Route
          path="/instructor/instructor-notification"
          element={<InstructorNotification />}
        />
        <Route
          path="/instructor/instructor-assignment"
          element={<InstructorAssignment />}
        />
        <Route
          path="/instructor/instructor-announcement"
          element={<InstructorAnnouncement />}
        />
        <Route
          path="/instructor/instructor-ticket"
          element={<InstructorTicket />}
        />

        <Route
          path="/instructor/instructor-course"
          element={<InstructorCourse />}
        />
        {/* instructor routes ends*/}

        {/* student routes starts*/}
        <Route path="/student/student-courses" element={<StudentCourses />} />
        <Route
          path="/student/student-dashboard"
          element={<StudentDashboard />}
        />
        <Route path="/student/student-profile" element={<StudentProfile />} />
        <Route path="/student/student-wishlist" element={<StudentWishlist />} />
        <Route path="/student/student-reviews" element={<StudentReviews />} />
        <Route path="/student/student-quiz" element={<StudentQuiz />} />
        <Route path="/student/student-quiz-details" element={<StudentQuizDetails />} />
        <Route
          path="/student/student-order-history"
          element={<StudentOrderHistory />}
        />
        <Route path="/student/student-qa" element={<StudentQA />} />
        <Route path="/student/student-referral" element={<StudentReferral />} />
        <Route path="/student/student-messages" element={<StudentMessages />} />
        <Route path="/student/students-profile" element={<StudentProfile />} />
        <Route path="/student/students-grid" element={<StudentsGrid />} />
        <Route path="/student/students-grid2" element={<StudentsGrid2 />} />
        <Route path="/student/students-list" element={<StudentsList />} />

        <Route
          path="/student/setting-student-subscription"
          element={<StudentSubscription />}
        />
        <Route
          path="/student/setting-support-new-tickets"
          element={<StudentNewTickets />}
        />

        <Route
          path="/student/setting-support-view-tickets"
          element={<StudentViewTickets />}
        />
        <Route
          path="/student/deposit-student-dashboard"
          element={<StudentDepositDashboard />}
        />
        <Route
          path="/student/setting-student-accounts"
          element={<StudentAccounts />}
        />
        <Route
          path="/student/setting-student-billing"
          element={<StudentBilling />}
        />
        <Route
          path="/student/setting-student-delete-profile"
          element={<StudentDeleteProfile />}
        />
        <Route
          path="/student/setting-student-invoice"
          element={<StudentInvoice />}
        />

        <Route
          path="/student/setting-student-payment"
          element={<StudentPayment />}
        />
        <Route
          path="/student/setting-student-privacy"
          element={<StudentPrivacy />}
        />
        <Route
          path="/student/setting-student-security"
          element={<StudentSecurity />}
        />
        <Route path="/student/course-student" element={<CourseStudent />} />
        <Route path="/student/deposit-student" element={<DepositStudent />} />
        <Route
          path="/student/transactions-student"
          element={<TransactionStudent />}
        />
        <Route
          path="/student/student-linked-accounts"
          element={<StudentLinkedAccounts />}
        />
        <Route
          path="/student/student-notification"
          element={<StudentNotification />}
        />
        <Route
          path="/student/student-social-profile"
          element={<StudentSocialProfile />}
        />
        <Route
          path="/student/student-change-password"
          element={<StudentChangePassword />}
        />
        <Route path="/student/student-setting" element={<StudentSetting />} />
        <Route path="/student/student-ticket" element={<StudentTicket />} />
        {/* student routes ends*/}
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
