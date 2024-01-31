import { Form } from "react-router-dom";

const LandingPage = () => {
  //   const navigate = useNavigate();
  //   function submitEventHandler() {
  //     navigate("/");
  //   }

  return (
    <Form method='POST'>
      <label htmlFor="cityName">Enter a city</label>
      <input id="cityName" type="text" name="cityName" />
      <button>Get Started</button>
    </Form>
  );
};

export default LandingPage;
