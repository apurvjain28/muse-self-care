import classes from "./Rituals.module.css";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../store/auth-context";

const Rituals = (props) => {
  const authCtx = useContext(AuthContext);
  //console.log(authCtx.data.ritual);

  // const dummy_Data = {
  //   title: "As a Manifesting Generator, it is important to remember:",
  //   message: `"Just because you said you would do something, doesn’t mean
  //   you have to if it doesn't feel aligned"; Become mindful of
  //   how you feel when doing something, set boundaries, let go of
  //   comparison. Focus on the things that spark JOY and always direct
  //   your energy outward as it needs somewhere to go or it's going to
  //   cause issues within your body`,
  //   touch: {
  //     name: "Touch",
  //     description: `movement/ feeling (yoga, stretching sequence), self-massage,
  //   creation with clay, tactile creativity`,
  //   },
  //   smell: {
  //     name: "Smell",
  //     description: `incense, oil elixir, bath soak, herbal steamer: what scents do you
  //     LOVE?`,
  //   },
  //   taste: {
  //     name: "Taste",
  //     description: `Tea, nourishing snacks, cacao drinking chocolate`,
  //   },
  //   sight: {
  //     name: "Sight",
  //     description: `Mirror work in practice (affirmations, meditation)`,
  //   },
  //   sound: {
  //     name: "Sound",
  //     description: `Meditation guidance + nature sounds (water, birds, calming sounds
  //       of nature) Finding your expression; speaking out loud`,
  //   },
  //   step1: {
  //     name: `Prepare`,
  //     description: `Gather tools and products, clear space, light candles
  //   or herbs, taste element (eat or drink something you enjoy! )`,
  //   },
  //   step2: {
  //     name: `Settle In`,
  //     description: `Ease into the ritual with meditation, breathwork, or body connection (stretch or self-touch) Manifesting Generator Meditation: Close your eyes, and imagine a string at the top of your head pulling you up straight but still feel relaxed and comfortable. Take a deep breath in for a count of 5, 4, 3, 2, 1 and hold the breath and give a big sigh out for a count of 7, 6, 5, 4, 3,2,1. Starting from your feet, tense up the area of the body as tightly as possible for 5 seconds, then relax. Make your way up to your legs, glutes, stomach, chest, arms, and shoulders. Next, make a face and tighten your face muscles for 5 seconds, furrow your brows and purse your lips for(1,2,3,4,5), then relax. Open your mouth as big as possible for (1, 2, 3, 4, 5) then relax. Close your eyes as tightly as possible for 5 seconds, and then relax. If there are any muscles anywhere else in your body that are feeling tense, tighten, hold for 5 seconds and relax. Squeeze each area tight while breathing deeply, then release. The final step is to tense up your entire body for 5 seconds and release. Repeat the final step until you feel like you've released all pent-up energy.`,
  //   },
  //   step3: {
  //     name: `Self Massage`,
  //     description: `As a Manifesting-generator, focus massaging right below your belly button to connect to your sacral chakra. Stroke down to right hip socket 5 times and to left hip socket, 5 times, honouring it for guiding you and stimulating it to steer you to only the things that light you up and away from what doesn’t.`,
  //   },
  //   step4: {
  //     name: `Expression Exercise`,
  //     description: `Welcome to "KnowledgeWalls"Stream of consciousness (Just write whatever comes to mind without judgment, and if you can't think of anything, just put pen to paper and trust things will come!) OR Journal prompts: - IF I COULD DO ANYTHING RIGHT NOW WITHOUT SUCCUMBING TO OTHERS' NEEDS, I WOULD... - MY GUT IS CURRENTLY TELLING ME TO HONOUR MYSELF BY... - IN MY LIFE CURRENTLY, I'M MOST EXCITED ABOUT REACHING MY GOAL OF... - IF I CHOSE 4 WORDS TO SUMMARIZE MY CORE ESSENCE AND PURPOSE THEY WOULD BE... + Affirmations (Say these out loud) " I ALLOW MY OWN LIGHT TO GUIDE ME TO DO MANY THINGS AT ONCE. IT'S WHO I AM." "I RELEASE MY IMPATIENCE WITH OTHERS. NOT EVERYONE CAN MOVE AS QUICKLY AS I CAN." "I CELEBRATE MY POWER AS A CREATOR. I SUPPORT MY CREATIVE PROCESS BY RESPONDING AND THEN INFORM PEOPLE ABOUT WHAT I'M DOING." "I AM OPEN TO ADVENTURE AND MAGIC AND ALLOW MYSELF TO RESPOND BEFORE I TAKE ACTION."`,
  //   },
  //   step5: {
  //     name: `Self-care Activity`,
  //     description: `Make this practice your own; Truth is, as a manifesting Generator you can do any activity that lights you up! If you can't think of one, Singing (connecting to your truth through your sounds) is a good start but use your intuition to guide you. What is your soul calling you to do to care for yourself today? Suggestions: creating art, any physical activity to expel your energy, dancing, singing, skipping, connecting with nature`,
  //   },
  //   step6: {
  //     name: `Wind Down`,
  //     description: `Hug, thank yourself, and say aloud how proud you are for investing the time and energy into yourself! Track your progress and commitment on a calendar or journal.`,
  //   },
  // };

  return (
    <React.Fragment>
      <div class="container">
        <div class="row">
          <div class="col" className={classes.ritual_title}>
            <div>
              <p className={classes.ritual_des}>
                <i>{authCtx.data.ritual.title}</i>
              </p>
            </div>
            <p className={classes.ritual_des}>{authCtx.data.ritual.message}</p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col info-ritual" className={classes.ritual_elements}>
            <p>
              <b>
                <u>{authCtx.data.ritual.touch.name}</u>
              </b>
              : {authCtx.data.ritual.touch.description}
            </p>
            <p>
              <b>
                <u>{authCtx.data.ritual.smell.name}</u>
              </b>
              : {authCtx.data.ritual.smell.description}
            </p>
            <p>
              <b>
                <u>{authCtx.data.ritual.taste.name}</u>
              </b>
              : {authCtx.data.ritual.taste.description}
            </p>
            <p>
              <b>
                <u>{authCtx.data.ritual.sight.name}</u>
              </b>
              : {authCtx.data.ritual.sight.description}
            </p>
            <p>
              <b>
                <u>{authCtx.data.ritual.sound.name}</u>
              </b>
              : {authCtx.data.ritual.sound.description}
            </p>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col">
              <p className={classes.ritual_head}>
                <b>Self care Ritual</b>
              </p>
              <p>
                <b>
                  <i>Each ritual has 6 components:</i>
                </b>
              </p>
              <p class="para_body1" className={classes.ritual_components}>
                <b>1. {authCtx.data.ritual.step1.name}:</b>{" "}
                {authCtx.data.ritual.step1.description}
              </p>
              <div className={classes.ritual_des}>
                <FontAwesomeIcon icon={faArrowDown} />
              </div>
              <p class="para_body1" className={classes.ritual_components}>
                <b>2. {authCtx.data.ritual.step2.name}:</b>{" "}
                {authCtx.data.ritual.step2.description}
              </p>
              <div className={classes.ritual_des}>
                <FontAwesomeIcon icon={faArrowDown} />
              </div>
              <p class="para_body1" className={classes.ritual_components}>
                <b>3. {authCtx.data.ritual.step3.name}:</b>
                {authCtx.data.ritual.step3.description}
              </p>
              <div className={classes.ritual_des}>
                <FontAwesomeIcon icon={faArrowDown} />
              </div>
              <p class="para_body1" className={classes.ritual_components}>
                <b>4. {authCtx.data.ritual.step4.name}:</b>{" "}
                {authCtx.data.ritual.step4.description}
              </p>
              <div className={classes.ritual_des}>
                <FontAwesomeIcon icon={faArrowDown} />
              </div>
              <p class="para_body1" className={classes.ritual_components}>
                <b>5. {authCtx.data.ritual.step5.name}:</b>{" "}
                {authCtx.data.ritual.step5.description}
              </p>
              <div className={classes.ritual_des}>
                <FontAwesomeIcon icon={faArrowDown} />
              </div>
              <p class="para_body1" className={classes.ritual_components}>
                <b>6. {authCtx.data.ritual.step6.name}:</b>{" "}
                {authCtx.data.ritual.step6.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Rituals;
