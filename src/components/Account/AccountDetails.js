import { useContext } from "react";

import classes from "./AccountDetails.module.css";
import AuthContext from "../../store/auth-context";

const AccountDetails = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      <section>
        <div>
          <h1>User Details</h1>
        </div>
        <form
          action="register_account.html"
          method="get"
          name="registration_form"
          id="registration_form"
        >
          <fieldset className={classes.field}>
            <legend className={classes.legend}>Member Information</legend>
            <label for="first_name">First Name</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              value={authCtx.data.user.firstname}
              disabled
            />
            <br />
            <label for="last_name">Last Name:</label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              value={authCtx.data.user.lastname}
              disabled
            />
            <br />

            <label for="birth_date">Birth Date:</label>
            <input
              type="date"
              name="birth_date"
              id="birth_date"
              value={authCtx.data.user.dob}
              disabled
            />
            <br />

            <label for="birth_time">Birth Time:</label>
            <input
              type="time"
              name="birth_time"
              id="birth_time"
              value={authCtx.data.user.birthTime}
              disabled
            />
            <br />

            <label for="country">Country:</label>
            <input
              type="text"
              name="country"
              id="country"
              value={authCtx.data.user.country}
              disabled
            />
            <br />

            <label for="city">City/Town:</label>
            <input
              type="text"
              name="city"
              id="city"
              value={authCtx.data.user.city}
              disabled
            />
            <br />

            <label for="state">State/Region:</label>
            <input
              type="text"
              name="state"
              id="state"
              value={authCtx.data.user.state}
              disabled
            />
            <br />
          </fieldset>

          <fieldset className={classes.field}>
            <legend className={classes.legend}>Contact Information</legend>

            <label for="address">Apt No./Street Name</label>
            <input
              type="text"
              name="address"
              id="address"
              value={authCtx.data.user.address1}
              disabled
            />
            <br />

            <label for="city">City:</label>
            <input
              type="text"
              name="city"
              id="city"
              value={authCtx.data.user.addressCity}
              disabled
            />
            <br />

            <label for="state">State:</label>
            <input
              type="text"
              name="state"
              id="state"
              value={authCtx.data.user.addressState}
              disabled
            />
            <br />

            <label for="country">Country:</label>
            <input
              type="text"
              name="country"
              id="country"
              value={authCtx.data.user.addressCountry}
              disabled
            />
            <br />

            <label for="zip">ZIP Code:</label>
            <input
              type="text"
              name="zip"
              id="zip"
              value={authCtx.data.user.addressZIP}
              disabled
            />
            <br />
            <label for="phone">Phone Number:</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={authCtx.data.user.addressPhone}
              disabled
            />
            <br />

            <label for="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={authCtx.data.user.email}
              disabled
            />
            <br />
          </fieldset>

          <fieldset className={classes.field}>
            <legend className={classes.legend}>Membership Information</legend>
            <label for="membership_type">Membership Type:</label>
            <select name="membership_type" id="membership_type">
              <option value="a">Human Design Guidance</option>
              <option value="b">
                Human Design Chart Analysis + Self-Care Rituals
              </option>
            </select>
            <br />
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AccountDetails;
