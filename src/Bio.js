import React from "react";

export default function Bio(props) {
  const { name } = props.match.params;

  if (name === "morrell") {
    return (
      <div>
        <p>Kristy Morrell has been a member of the USC Thornton faculty
        for over two decades as instructor of horn and chamber music. Currently
        she chairs the department of Winds, Brass and Percussion. She has been a
        member of Los Angeles Chamber Orchestra since 1997, and performs
        frequently with the Los Angeles Philharmonic, the Los Angeles Opera,
        Pasadena Symphony, the Hollywood Bowl Orchestra, Pacific Symphony and New
        West Symphony. She is also a respected recording artist, performing on
        numerous motion pictures, television soundtracks and records.</p>

        <p>Kristy has a Doctor of Musical Arts degree from the USC Thornton School
         of Music, where she also received her Master of Music. She received a
         Bachelor of Music and a Performer’s Certificate from the Eastman School
         of Music. In 1993 she was the First Place winner of the International
         Horn Society solo competition, and in 1997 she was the First Place winner
         of the solo competition at the International Women’s Brass Conference.
         Her principal teachers were Verne Reynolds, Vincent DeRosa and James
         Decker.</p>
      </div>
    );
  } else if (name === "becknell") {
    return (
      <div>
        <p>Author of the groundbreaking book for horn, Etudes from the Repertoire,
        Steven Becknell has had an extremely varied and unique career in Southern
        California. At age 22, Becknell moved to Los Angeles to study with
        Hollywood studio legend Vince DeRosa at USC and began working
        professionally while still in school. He has played in orchestras
        throughout Southern California including the Los Angeles Philharmonic, the
        San Diego Symphony, the Pacific Symphony, and was a member of the Los
        Angeles Chamber Orchestra for eight years. But the majority of Becknell’s
        time has been spent recording in the Hollywood studios.</p>

        <p>He has played on well over 1,000 motion pictures, many television
        series, video games, and even the recorded music for theme parks such as
        Disneyland. Becknell has played live for the Academy Awards and has had
        the honor of recording with such legendary artists as Frank Sinatra,
        Barbra Streisand, Rosemary Clooney and Barry Manilow.</p>

        <p>Becknell has been principal horn with the Los Angeles Opera for over
        25 years. In 2010, he performed all the offstage and pit solos of
        Wagner’s complete Ring cycle, the first time it had ever been produced
        in Southern California. To date, Becknell has played over 1,500
        performances with the Los Angeles Opera.</p>

        <p>Becknell has performed chamber music extensively in the Los Angeles
        area, was a long-time member of West Coast-based Camerata Pacifica, and
        has performed at the Santa Fe Chamber Music Festival and Mostly Mozart
        Festival. A veteran of numerous Broadway show productions, Becknell is
        eager to impart all of this broad-based experience with students at USC.
        </p>
      </div>
    );
  }
  else {
    return <p>Select a faculty member</p>
  }
}
