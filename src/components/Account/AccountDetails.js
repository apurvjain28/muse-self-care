import classes from "./AccountDetails.module.css";

const AccountDetails = () => {
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
              value="Jane"
              disabled
            />
            <br />
            <label for="last_name">Last Name:</label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              value="Doe"
              disabled
            />
            <br />

            <label for="birth_date">Birth Date:</label>
            <input type="date" name="birth_date" id="birth_date" />
            <br />

            <label for="birth_time">Birth Time:</label>
            <input type="time" name="birth_time" id="birth_time" />
            <br />

            <label for="country">Country:</label>
            <input type="text" name="country" id="country" />
            <br />

            <label for="city">City/Town:</label>
            <input type="text" name="city" id="city" />
            <br />

            <label for="state">State/Region:</label>
            <input type="text" name="state" id="state" />
            <br />

            <label for="birth_time_utc">Birth Time UTC</label>
            <input type="time" name="birth_time_utc" id="birth_time_utc" />
            <br />
          </fieldset>

          <fieldset className={classes.field}>
            <legend className={classes.legend}>Contact Information</legend>

            <label for="address">Apt No./Street Name</label>
            <input type="text" name="address" id="address" />
            <br />

            <label for="city">City:</label>
            <input type="text" name="city" id="city" />
            <br />

            <label for="state">State:</label>
            <input type="text" name="state" id="state" />
            <br />

            <label for="country">Country:</label>
            <input type="text" name="country" id="country" />
            <br />

            <label for="zip">ZIP Code:</label>
            <input
              type="text"
              name="zip"
              id="zip"
              //   pattern="^\d{5}(-\d{4})?$"
            />
            <br />
            <label for="phone">Phone Number:</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              //   pattern="\d{3}[\-]\d{3}[\-]\d{4}"
              //   title="Must be 999-999-999 format"
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
