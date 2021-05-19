import React from "react";
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  // AmplifyFormSection,
  // AmplifyAuthFields,
} from "@aws-amplify/ui-react";
import { FormFieldTypes } from "@aws-amplify/ui-components/dist/types/components/amplify-auth-fields/amplify-auth-fields-interface";
import { Logger } from "@aws-amplify/core";

export default function AuthenticatorCustom() {
  const logger = new Logger("AuthenticatorCustom");
  return (
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignUp
        slot="sign-up"
        headerText="Sign Up"
        usernameAlias="email"
        formFields={
          [
            {
              type: "email",
              label: "Email *",
              placeholder: "Enter your email",
              required: true,
              handleInputChange: (event: Event, cb: Function) => {
                logger.debug("custom username field");
                cb(event);
              },
            },
            {
              type: "password",
              label: "Password *",
              placeholder: "Enter your password",
              required: true,
              handleInputChange: (event: Event, cb: Function) => {
                logger.debug("custom password field");
                cb(event);
              },
            },
            {
              type: "phone_number",
              label: "Phone Number *",
              placeholder: "Enter your phone number",
              required: true,
              handleInputChange: (event: Event, cb: Function) => {
                logger.debug("custom phone number field");
                cb(event);
              },
            },
            {
              type: "custom:Organization",
              label: "Organization *",
              placeholder: "Enter the organization you work for",
              required: true,
              handleInputChange: (event: Event, cb: Function) => {
                logger.debug("custom organization field");
                cb(event);
              },
            },
            {
              type: "custom:Name",
              label: "Name *",
              placeholder: "Enter your full name",
              required: true,
              handleInputChange: (event: Event, cb: Function) => {
                logger.debug("custom full name field");
                cb(event);
              },
            },
            {
              type: "custom:Usage",
              label: "Usage *",
              placeholder: "Enter details on usage",
              required: true,
              handleInputChange: (event: Event, cb: Function) => {
                logger.debug("custom usage field");
                cb(event);
              },
            },
          ] as FormFieldTypes
        }
      />
      {/* The component below is just a test
      <AmplifyFormSection slot="sign-in">
        <AmplifyAuthFields
          formFields={[
            {
              type: "email",
              label: "Email Address *",
              required: true,
            },
            {
              type: "password",
              label: "Password *",
              required: true,
            },
          ]}
        />
        <div slot="amplify-form-section-footer">
          <footer>Footer</footer>
          { //code for your link to signin form and submit button }
        </div>
      </AmplifyFormSection>
    */}
    </AmplifyAuthenticator>
  );
}
