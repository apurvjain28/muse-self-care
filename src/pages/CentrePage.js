import Centre from "../components/Centres/Centre";
import React, { useContext } from "react";
import AuthContext from "../store/auth-context";

// this data will be fetched using api from 2nd team
const CentrePage = () => {
  const authCtx = useContext(AuthContext);

  const DUMMY_DATA = [
    {
      isHeadDefined: false,
      isAjnaDefined: true,
      isThroatDefined: true,
      isIdentityDefined: false,
      isHeartDefined: true,
      isSacralDefined: true,
      isEmotionsDefined: true,
      isSpleenDefined: false,
      isRootDefined: false,
      undefinedHead: (
        <p>
          <em>
            Undefined Head: Pressure center and source of inspiration, ideas or
            anxiety
          </em>
          <br></br>
          <br></br>
          With an undefined head center, you experience a lack of mental
          pressure; Be aware of allowing pressure to drive your decisions or
          feel that something is wrong because you may have an inconsistency
          with your thoughts or mental will power. You amplify the anxiety or
          thoughts of those around you. Learn to only focus on the thoughts that
          are relevant and serve you. <hr></hr> Gifts: You understand that
          questions are not your own, so you shouldn’t feel the pressure of
          other’s needs for answers. Being open to new insights and inspiration
          coming from who is in your aura, you can enjoy the pressure to know
          more without becoming identified or overwhelmed by it. You tend to
          withdraw when confused or uncertain. <hr></hr> Traps: You tend to
          easily feel lost or overwhelmed by doubt that actually belongs to
          others and end up trying to resolve other people’s questions and take
          on the worries of those around you, which can lead to you trying to
          release the mental pressure through action. It’s difficult for you to
          clear the head’s energy and relax.
        </p>
      ),
      definedHead: (
        <p>
          <em>
            Defined Head: Pressure center and source of inspiration, or anxiety
          </em>
          <br></br>
          <br></br>
          You may always feel pressure to think but it's important to recognize
          that you can’t spend your whole life analyzing, you must actually live
          it: life should be lived, not analyzed. You have the ability to be
          inspirational to others for their benefit.
          <hr></hr> - Gifts: You accept mental pressure without needing to turn
          it into action and you accept confusion, doubt and clarity as natural
          processes within divine timing.
          <hr></hr>- Traps: Watch out for turning mental pressure in on itself
          to be driven deep into anxiety, self-doubt or depression when you feel
          like you can’t resolve the pressure. Don’t try to resolve pressure
          through external action, which will lead to hasty or inappropriate
          decisions (FOLLOW YOUR INNER AUTHORITY!). You may struggle with
          patience which will mean missed opportunities for inspiration.
        </p>
      ),
      undefinedAjna: (
        <p>
          <em>
            Undefined Ajna: Center of analytical thinking, data processing and
            opinions
          </em>
          <br></br>
          <br></br>
          Center of analytical thinking, data processing and opinions: you have
          a reliable way of processing information and consistent opinions,
          concept and theories that can influence how others think
          <hr></hr>- Gifts:
          <hr></hr>- Traps:
        </p>
      ),
      definedAjna: (
        <p>
          <em>
            Defined Ajna: Center of analytical thinking, data processing and
            opinions
          </em>
          <br></br>
          <br></br>
          You have a reliable way of processing information and consistent
          opinions, concept and theories that can influence how others think. -
          Gifts: - Traps:
        </p>
      ),
      undefinedThroat: (
        <p>
          <em>
            Undefined Throat: Center of expression and manifestation into action
          </em>
          <br></br>
          <br></br>
          You do not have a consistent voice, this can create nervousness or
          pressure to speak. Trust silence when it feels right and you will feel
          called to speak when you are calm. - Gifts: - Traps:
        </p>
      ),
      definedThroat: (
        <p>
          <em>
            Defined Throat: Center of expression and manifestation into action
          </em>
          <br></br>
          <br></br>
          The center of expression and manifestation into action: you have a
          consistent voice to share who you are through speaking. All energy
          must go through the throat to become reality (manifestation center)
        </p>
      ),
      undefinedIdentity: (
        <p>
          <em>Undefined Identity: Center of love, self and direction</em>
          <br></br>
          <br></br>
          Your identity is transient and dependent on the environment you're in.
          Many spiritual leaders have an undefined identity center. - Gifts: -
          Traps:
        </p>
      ),
      definedIdentity: (
        <p>
          <em>Defined Identity: Center of love, self and direction</em>
          <br></br>
          <br></br>A consistent sense of who you are and how you experience
          love; you don’t change depending on the people around you - Gifts: -
          Traps:
        </p>
      ),
      undefinedHeart: (
        <p>
          <em>
            Undefined Heart: Center of willpower, ego and courage (not love)
          </em>
          <br></br>
          <br></br>You may spend a great deal of time trying to prove your worth
          and overcome a lack of self-esteem - Gifts: - Traps:
        </p>
      ),
      definedHeart: (
        <p>
          <em>
            Defined Heart: Center of willpower, ego and courage (not love)
          </em>
          <br></br>
          <br></br>a consistent source of willful energy. You keep your promises
          but can come off as arrogant to people who don't have this defined -
          attune to your heart's desire: once you set your heart on something,
          you can’t be stopped. Learn how to read the yes or no in your heart;
          drawing towards or pulling away (very personal and subjective) Make
          sure it’s coming from YOUR heart. - Gifts: - Traps:
        </p>
      ),
      undefinedSacral: (
        <p>
          <em>
            Undefined Sacral: Center of life-force, sexuality and work-force
            energy
          </em>
          <br></br>
          <br></br>You do not have access to sustainable energy but you will
          amplify the energy of those around you which can lead to severe
          burnout. - Be mindful of saying yes to things you really don’t want to
          and not knowing when to say enough is enough. - Make sure to integrate
          rest in your schedule; it will actually allow you to perform much
          better. - Carve out alone time to fully allow the amplified energy in
          this center to expel and ground yours - Gifts: - Traps:
        </p>
      ),
      definedSacral: (
        <p>
          <em>
            Defined Sacral: Center of life-force, sexuality and work-force
            energy
          </em>
          <br></br>
          <br></br>You have sustainable energy to work hard. Wisdom responds
          from here to select the right things to direct your energy into -
          following your “gut”: lower belly sensation (Decisions are made in the
          gut, not the mind). Responsive inner guidance system: “uh-huh” for yes
          and “uh-uh” for no (sensation of being drawn toward or repelled by
          something. no response indicates lack of interest; sit and wait for
          the gut to respond). Note the difference between gut response
          (patient, relaxed) and emotional reaction (unconscious, hasty) - if
          emotions spleen and sacral are all defined, you may experience alerts
          from spleen and sacral, but emotions still rule and you should wait
          for emotional clarity - if both spleen and sacral are defined, your
          gut response is an instantaneous split-second response. - Gifts: -
          Traps:
        </p>
      ),
      undefinedEmotions: (
        <p>
          <em>Undefined Emotions</em>
          <br></br>
          <br></br>You take other people's emotions and amplify them. Make
          decisions once these emotions have passed. - Gifts: - Traps:
        </p>
      ),
      definedEmotions: (
        <p>
          <em>Defined Emotions</em>
          <br></br>
          <br></br>you must ride the waves of emotions and wait for the calm of
          the storm to tap into clarity. Becoming familiar with your unique
          waves of emotions will help you weather the storm as they come! - when
          paired with a defined spleen, an alert will sound within you, coming
          from the spleen but it’s still important to wait for emotional clarity
          as emotions still rule - Gifts: - Traps:
        </p>
      ),
      undefinedSpleen: (
        <p>
          <em>Undefined Spleen: Primal awareness and spontaneous intuition</em>
          <br></br>
          <br></br>With it undefined you may feel insecure and vulnerable at
          times and this is because you are taking the fears and insecurities of
          those around you and amplifying them. It's best for you to stay clear
          from spontaneity. Many healers with this center undefined can sense
          diseases in other people. - Gifts: - Traps:
        </p>
      ),
      definedSpleen: (
        <p>
          <em>Defined Spleen: Primal awareness and spontaneous intuition</em>
          <br></br>
          <br></br>Listen to your gut feelings. It is subtle and doesn’t repeat
          itself - Do not hesitate; Usually those who have the Spleen defined
          have naturally sharp senses (that you use to help make decisions since
          the spleen is the most quiet center, so the senses are utilized). -
          when paired with defined emotions, an alert will sound within you,
          coming from the spleen but it’s still important to wait for emotional
          clarity as emotions still rule - if emotions spleen and sacral are all
          defined, you may experience alerts from spleen and sacral, but
          emotions still rule and you should wait for emotional clarity - Gifts:
          - Traps:
        </p>
      ),
      undefinedRoot: (
        <p>
          <em>Undefined Root: Adrenaline, stress and physical pressure</em>
          <br></br>
          <br></br>Understand that the pressure you feel is coming from outside
          you (Amplified energy). Once you complete a task you felt pressure to
          finish, the pressure will still be there once you finish (it was never
          coming from you) Professional Athletes often have undefined roots. -
          Gifts: - Traps:
        </p>
      ),
      definedRoot: (
        <p>
          <em>Defined Root: Adrenaline, stress and physical pressure</em>
          <br></br>
          <br></br>You have sustainable physical energy to fuel your activities,
          but you may put pressure on people who have this undefined - Gifts: -
          Traps:
        </p>
      ),
    },
  ];

  return (
    <React.Fragment>
      <Centre data={DUMMY_DATA} db={authCtx.data} />;
    </React.Fragment>
  );
};

export default CentrePage;
