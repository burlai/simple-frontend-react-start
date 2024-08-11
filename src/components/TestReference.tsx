import { useCallback, useRef } from "react";
import ShippingForm from "./ShippingForm";

type TestWithReferenceProps = {
  productId: string;
  referrer: string;
  theme: string;
};

const post = (url: string, data: unknown) => {
  // Imagine this sends a request...
  //   console.log("POST /" + url);
  //   console.log(data);
};

const TestWithReference = ({
  productId,
  referrer,
  theme,
}: TestWithReferenceProps) => {
  const handleSimpleSubmit = (orderDetails: unknown) => {
    console.log("handleSimpleSubmit called");

    post("/product/" + productId + "/buy", {
      referrer,
      orderDetails,
    });
  };

  const handleUseCallbackSubmit = useCallback(
    (orderDetails: unknown) => {
      console.log("handleUseCallbackSubmit called");

      post("/product/" + productId + "/buy", {
        referrer,
        orderDetails,
      });
    },
    [productId, referrer]
  );

  // Refs to store previous functions references:
  const prevHandleUseCallbackSubmitRef = useRef<
    typeof handleUseCallbackSubmit | null
  >(null);
  const prevHandleSimpleSubmitRef = useRef<typeof handleSimpleSubmit | null>(
    null
  );

  if (prevHandleUseCallbackSubmitRef.current !== handleUseCallbackSubmit) {
    console.log("handleUseCallbackSubmit reference changed");
  } else {
    console.log("handleUseCallbackSubmit reference did not change");
  }

  if (prevHandleSimpleSubmitRef.current !== handleSimpleSubmit) {
    console.log("handleSimpleSubmit reference changed");
  } else {
    console.log("handleSimpleSubmit reference did not change");
  }

  // Update the refs with the current functions references:
  prevHandleUseCallbackSubmitRef.current = handleUseCallbackSubmit;
  prevHandleSimpleSubmitRef.current = handleSimpleSubmit;

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSimpleSubmit} />
    </div>
  );
};

export default TestWithReference;
