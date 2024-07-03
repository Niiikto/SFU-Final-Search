function searchExam() {
    const courseCode = document.getElementById('courseCode').value;
    const resultsSection = document.getElementById('resultsSection');

    // Clear previous results
    resultsSection.innerHTML = '';

    // Dummy data for demonstration
    const examData = [
        { course: 'ARCH 286', course: 'ARCH286', section: 'D100', date: '16 August', time: '12:00 - 15:00', location: 'Room AQ 3003' },
        { course: 'ARCH 375', course: 'ARCH375', section: 'D100', date: '7 August', time: '23:59', location: 'TAKE HOME' },
        { course: 'BISC 101', course: 'BISC101', section: 'D100', date: '13 August', time: '12:00 - 15:00', location: 'SSCB 9200' },
        { course: 'BISC 102', course: 'BISC102', section: 'D100', date: '14 August', time: '08:30 - 11:30', location: 'Room SSCB 9200' },
        { course: 'BISC 202', course: 'BISC202', section: 'D100', date: '14 August', time: '08:30 - 11:30', location: 'Room AQ 3181'},
        { course: 'BISC 303', course: 'BISC303', section: 'D100', date: '9 August', time: '15:30 - 18:30', location: 'Room WMC 3520'},
        { course: 'BISC 333', course: 'BISC333', section: 'D100', date: '7 August', time: '15:30 - 18:30', location: 'Room BLU 9660'},
        { course: 'BISC 492W', course: 'BISC492W', date: '6 August', time: '08:30 - 11:30', location: 'Room BLU 10901'},
        { course: 'BISC 492W', course: 'BISC492W', date: '6 August', time: '08:30 - 11:30', location: 'Room WMC 3511'},
        { course: 'BPK 105', course: 'BPK105', date: '10 August', time: '12:00 - 14:00', location: 'Room SSCK 9500'},
        { course: 'BPK 110', course: 'BPK110', section: 'D100', date: '6 August', time: '15:30 - 18:30', location: 'Room WMC 3260'},
        { course: 'BPK 110', course: 'BPK110', date: '9 August', time: '08:30 - 11:30', location: 'Room SRYC 5100'},
        { course: 'BPK 110', course: 'BPK110', date: '8 August', time: '19:00 - 21:30', location: 'Room SSCB 9200'},
        { course: 'BPK 140', course: 'BPK140', section: 'D100', date: '7 August', time: '12:00 - 15:00', location: 'Room SSCK 9500'},
        { course: 'BPK 140', course: 'BPK140', date: '13 August', time: '12:00 - 15:00', location: 'Room AQ 3182'},
        { course: 'BPK 142', course: 'BPK142', section: 'D100', date: '16 August', time: '08:30 - 11:30', location: 'Room EDB 7618'},
        { course: 'BPK 241', course: 'BPK241', section: 'D100', date: '9 August', time: '12:00 - 15:00', location: 'Room AQ 3003'},
        { course: 'BPK 310', course: 'BPK310', date: '12 August', time: '08:30 - 11:30', location: 'Room AQ 3153'},
        { course: 'BPK 340', course: 'BPK340', section: 'D100', date: '10 August', time: '12:00 - 15:00', location: 'Room AQ 3005'},
        { course: 'BPK 343', course: 'BPK343', section: 'D100', date: '15 August', time: '12:00 - 15:00', location: 'Room WMC 3210'},
        { course: 'BPK 481', course: 'BPK481', section: 'D100', date: '10 August', time: '15:30 - 18:30', location: 'Room WMC 2220'},
        { course: 'BUS 207', course: 'BUS207', section: 'D100', date: '10 August', time: '12:00 - 15:00', location: 'Room WMC 3520'},
        { course: 'BUS 207', course: 'BUS207', date: '14 August', time: '15:30 - 18:30', location: 'Room SRYC 5280'},
        { course: 'BUS 233', course: 'BUS233', section: 'D100', date: '7 August', time: '23:59', location: 'TAKE HOME' },
        { course: 'BUS 237', course: 'BUS237', section: 'D100', date: '14 August', time: '12:00 - 15:00', location: 'Room SSCC 9001'},
        { course: 'BUS 237', course: 'BUS237', date: '14 August', time: '12:00 - 15:00', location: 'Room SSCC 9001'},
        { course: 'BUS 251', course: 'BUS251', section: 'D100', date: '12 August', time: '12:00 - 15:00', location: 'Room SSCB 9200'},
        { course: 'BUS 251', course: 'BUS251', date: '16 August', time: '08:30 - 11:30', location: 'Room SRYE 1002'},
        { course: 'BUS 254', course: 'BUS254', section: 'D100', date: '16 August', time: '08:30 - 11:30', location: 'Room AQ 3181'},
        { course: 'BUS 254', course: 'BUS254', date: '6 August', time: '15:30 - 18:30', location: 'Room SRYC 3170'},
        { course: 'BUS 272', course: 'BUS272', section: 'D100', date: '7 August', time: '15:30 - 18:30', location: 'Room SSCB 9200'},
        { course: 'BUS 272', course: 'BUS272', date: '6 August', time: '08:30 - 11:30', location: 'Room SRYE 1002'},
        { course: 'BUS 303', course: 'BUS303', date: '9 August', time: '08:30 - 10:30', location: 'Room WMC 3260'},
        { course: 'BUS 311', course: 'BUS311', section: 'D100', date: '10 August', time: '15:30 - 18:30', location: 'Room AQ 3154'},
        { course: 'BUS 316', course: 'BUS316', section: 'D100', date: '14 August', time: '15:30 - 18:30', location: 'Room AQ 3181'},
        { course: 'BUS 316', course: 'BUS316', date: '14 August', time: '15:30 - 18:30', location: 'Room AQ 3181'},
        { course: 'BUS 320', course: 'BUS320', section: 'D100', date: '10 August', time: '12:00 - 15:00', location: 'Room SWH 10041'},
        { course: 'BUS 320', course: 'BUS320', date: '10 August', time: '12:00 - 15:00', location: 'Room SWH 10041'},
        { course: 'BUS 321', course: 'BUS321', section: 'D100', instructor: 'R.Sandhawalia', date: '9 August', time: '08:30 - 11:30', location: 'Room BLU 9660'},
        { course: 'BUS 322', course: 'BUS322', section: 'D100', instructor: 'W.Liu', date: '12 August', time: '12:00 - 15:00', location: 'Room WMC 3260'},
        { course: 'BUS 330', course: 'BUS330', section: 'D100', instructor: 'K.Fung', date: '12 August', time: '08:30 - 11:30', location: 'Room AQ 3154'},
        { course: 'BUS 331', course: 'BUS331', section: 'D100', instructor: 'K.Fung', date: '7 August', time: '19:00 - 22:00', location: 'Room WMC 3210'},
        { course: 'BUS 343', course: 'BUS343', section: 'D100', instructor: 'C.Gomez Borquez', date: '12 August', time: '08:30 - 11:30', location: 'Room WMC 3520'},
        { course: 'BUS 343', course: 'BUS343', section: 'D200', instructor: 'C.Gomez Borquez', date: '7 August', time: '12:00 - 15:00', location: 'Room SRYE 1002'},
        { course: 'BUS 345', course: 'BUS345', section: 'D100', instructor: 'E.Treen', date: '9 August', time: '08:30 - 11:30', location: 'Room AQ 3150'},
        { course: 'BUS 347', course: 'BUS347', section: 'D100', instructor: 'J.Zaichkowsky', date: '6 August', time: '08:30 - 11:30', location: 'Room RCB 8100'},
        { course: 'BUS 361', course: 'BUS361', section: 'D200', instructor: 'M.Kim', date: '10 August', time: '15:30 - 18:30', location: 'Room SRYC 3170'},
        { course: 'BUS 373', course: 'BUS373', section: 'D100', instructor: 'S.Ghotb', date: '9 August', time: '08:30 - 11:30', location: 'Room RCB 8100'},
        { course: 'BUS 381', course: 'BUS381', section: 'E100', instructor: 'B.Assadi', date: '15 August', time: '19:00 - 22:00', location: 'Room SSCK 9500'},
        { course: 'BUS 393', course: 'BUS393', section: 'D100', instructor: 'S.Bhalloo', date: '7 August', time: '15:30 - 18:30', location: 'Room SSCK 9500'},
        { course: 'BUS 393', course: 'BUS393', section: 'D200', instructor: 'J.Jutras', date: '7 August', time: '15:30 - 18:30', location: 'Room SRYC 3170'},
        { course: 'BUS 393', course: 'BUS393', section: 'E100', instructor: 'R.Elliott', date: '14 August', time: '19:00 - 22:00', location: 'Room WMC 3210'},
        { course: 'BUS 410', course: 'BUS410', section: 'D100', instructor: 'A.Vedrashko', date: '13 August', time: '12:00 - 15:00', location: 'Room WMC 3260'},
        { course: 'BUS 410', course: 'BUS410', section: 'E100', instructor: 'A.Vedrashko', date: '13 August', time: '12:00 - 15:00', location: 'Room WMC 3260'},
        { course: 'BUS 413', course: 'BUS413', section: 'D100', instructor: 'J.Niu', date: '7 August', time: '19:00 - 22:00', location: 'Room EDB 7618'},
        { course: 'BUS 413', course: 'BUS413', section: 'E100', instructor: 'J.Niu', date: '7 August', time: '19:00 - 22:00', location: 'Room EDB 7618'},
        { course: 'BUS 417', course: 'BUS417', section: 'D100', instructor: 'G.Poitras', date: '10 August', time: '12:00 - 15:00', location: 'Room WMC 2503'},
        { course: 'BUS 418', course: 'BUS418', section: 'E100', instructor: 'Y.Liao', date: '14 August', time: '19:00 - 22:00', location: 'Room BLU 10921'},
        { course: 'BUS 419', course: 'BUS419', section: 'D100', instructor: 'G.Poitras', date: '6 August', time: '08:30 - 11:30', location: 'Room WMC 3513'},
        { course: 'BUS 420', course: 'BUS420', section: 'D100', instructor: 'R.Sandhawalia', date: '15 August', time: '08:30 - 11:30', location: 'Room AQ 3003'},
        { course: 'BUS 421', course: 'BUS421', section: 'D100', instructor: 'L.Zhang', date: '16 August', time: '12:00 - 15:00', location: 'Room WMC 3260'},
        { course: 'BUS 421', course: 'BUS421', section: 'E100', instructor: 'L.Zhang', date: '16 August', time: '12:00 - 15:00', location: 'Room WMC 3260'},
        { course: 'BUS 424', course: 'BUS424', section: 'D100', instructor: 'A.Rattan', date: '6 August', time: '12:00 - 15:00', location: 'Room RCB 8100'},
        { course: 'BUS 426', course: 'BUS426', section: 'D100', instructor: 'M.Favere-Marchesi', date: '10 August', time: '15:30 - 18:30', location: 'Room AQ 3003'},
        { course: 'BUS 426', course: 'BUS426', section: 'E100', instructor: 'M.Favere-Marchesi', date: '10 August', time: '15:30 - 18:30', location: 'Room AQ 3003'},
        { course: 'BUS 445', course: 'BUS445', section: 'D100', instructor: 'M.Soleymanian', date: '15 August', time: '08:30 - 11:30', location: 'Room BLU 10921'},
        { course: 'BUS 462', course: 'BUS462', section: 'D100', instructor: 'V.Dar', date: '12 August', time: '08:30 - 11:30', location: 'Room BLU 10921'},
        { course: 'BUS 464', course: 'BUS464', section: 'D100', instructor: 'A.Amintabar', date: '6 August', time: '15:30 - 18:30', location: 'Room SWH 10061'},
        { course: 'BUS 466', course: 'BUS466', section: 'D100', instructor: 'R.Yu', date: '15 August', time: '08:30 - 11:30', location: 'Room WMC 2503'},
        { course: 'BUS 468', course: 'BUS468', section: 'D100', instructor: 'M.Matta', date: '13 August', time: '12:00 - 15:00', location: 'Room RCB 8100'},
        { course: 'BUS 468', course: 'BUS468', section: 'E100', instructor: 'M.Matta', date: '13 August', time: '12:00 - 15:00', location: 'Room RCB 8100'},
        { course: 'BUS 481', course: 'BUS481', section: 'D100', instructor: 'B.Assadi', date: '13 August', time: '19:00 - 22:00', location: 'Room BLU 10921'},
        { course: 'CA 104', course: 'CA104', section: 'OL01', instructor: 'J.Danielson', date: '14 August', time: '15:30 - 18:30', location: 'ONLINE'},
        { course: 'CA 140', course: 'CA140', section: 'OL01', instructor: 'A.Eigenfeldt', date: '9 August', time: '23:59', location: 'TAKE HOME'},
        { course: 'CA 142', course: 'CA142', section: 'OL01', instructor: 'A.Eigenfeldt', date: '6 August', time: '23:59', location: 'TAKE HOME'},
        { course: 'CHEM 110', course: 'CHEM110', section: 'OL01', instructor: 'D.McKearney', date: '11 August', time: '15:30 - 18:30', location: 'ONLINE'},
        { course: 'CHEM 120', course: 'CHEM120', section: 'D400', instructor: 'P.Li', date: '8 August', time: '15:30 - 18:30', location: 'SSCC 9001'},
        { course: 'CHEM 120', course: 'CHEM120', section: 'D400', instructor: 'P.Li', date: '8 August', time: '15:30 - 18:30', location: 'SSCB 9201'},
        { course: 'CHEM 121', course: 'CHEM121', section: 'D100', instructor: 'P.Li', date: '8 August', time: '15:30 - 18:30', location: 'SSCB 9201'},
        { course: 'CHEM 121', course: 'CHEM121', section: 'D100', instructor: 'P.Li', date: '8 August', time: '15:30 - 18:30', location: 'SSCC 9001'},
        { course: 'CHEM 210', course: 'CHEM210', section: 'D100', instructor: 'R.Sharma', date: '7 August', time: '19:00 - 22:00', location: 'AQ 3003'},
        { course: 'CHEM 216', course: 'CHEM216', section: 'LA01', instructor: 'R.Sharma', date: '13 August', time: '15:30 - 18:30', location: 'WMC 3210'},
        { course: 'CHEM 216', course: 'CHEM216', section: 'LA02', instructor: 'R.Sharma', date: '13 August', time: '15:30 - 18:30', location: 'WMC 3210'},
        { course: 'CHEM 280', course: 'CHEM280', section: 'D100', instructor: 'M.Arafeh', date: '9 August', time: '08:30 - 11:30', location: 'SSCC 9001'},
        { course: 'CHEM 281', course: 'CHEM281', section: 'D100', instructor: 'M.Arafeh', date: '9 August', time: '08:30 - 11:30', location: 'SSCC 9001'},
        { course: 'CMNS 110', course: 'CMNS110', section: 'OL01', instructor: 'L.Cameron', date: '10 August', time: '12:00 - 15:00', location: 'ONLINE'},
        { course: 'CMNS 253W', course: 'CMNS253W', section: 'OL01', instructor: 'R.Smith', date: '7 August', time: '23:59', location: 'TAKE HOME'},
        { course: 'CMNS 311', course: 'CMNS311', section: 'D100', instructor: 'S.Gunster', date: '12 August', time: '17:00', location: 'TAKE HOME'},
        { course: 'CMNS 311', course: 'CMNS311', section: 'D200', instructor: 'V.Thomas', date: '13 August', time: '12:00', location: 'TAKE HOME'},
        { course: 'CMNS 316', course: 'CMNS316', section: 'D200', instructor: 'D.Fleet', date: '9 August', time: '12:00 - 15:00', location: 'HCC 1900'},
        { course: 'CMPT 105W', course: 'CMPT105W', section: 'D100', instructor: 'H.Tsang', date: '13 August', time: '15:30-17:30', location: 'SSCC 9001'},
        { course: 'CMPT 120', course: 'CMPT120', section: 'D100', instructor: 'G.Baker', date: '12 August', time: '08:30-11:30', location: 'SSCC 9001'},
        { course: 'CMPT 125', course: 'CMPT125', section: 'D100', instructor: 'A.Lavergne', date: '12 August', time: '12:00-15:00', location: 'SSCC 9001'},
        { course: 'CMPT 213', course: 'CMPT213', section: 'D100', instructor: 'B.Chan', date: '8 August', time: '12:00-15:00', location: 'SRYE 1002'},
        { course: 'CMPT 225', course: 'CMPT225', section: 'D100', instructor: 'A.Lavergne', date: '9 August', time: '12:00-15:00', location: 'SSCC 9001'},
        { course: 'CMPT 225', course: 'CMPT225', section: 'D200', instructor: 'V.Cheung', date: '9 August', time: '12:00-15:00', location: 'SRYE 1002'},
        { course: 'CMPT 263', course: 'CMPT263', section: 'D100', instructor: 'V.Cheung', date: '6 August', time: '12:00-15:00', location: 'SRYE 3016'},
        { course: 'CMPT 276', course: 'CMPT276', section: 'D100', instructor: 'R.Tront', date: '9 August', time: '15:30-18:30', location: 'AQ 3181'},
        { course: 'CMPT 276', course: 'CMPT276', section: 'D200', instructor: 'B.Chan', date: '9 August', time: '15:30-18:30', location: 'SRYE 1002'},
        { course: 'CMPT 295', course: 'CMPT295', section: 'D100', instructor: 'G.Baker', date: '7 August', time: '12:00-15:00', location: 'SSCC 9001'},
        { course: 'CMPT 307', course: 'CMPT307', section: 'D100', instructor: 'T.Shermer', date: '11 August', time: '15:30-18:30', location: 'SRYE 1002'},
        { course: 'CMPT 310', course: 'CMPT310', section: 'D100', instructor: 'A.Nezami', date: '16 August', time: '12:00-14:00', location: 'SSCB 9201'},
        { course: 'CMPT 310', course: 'CMPT310', section: 'D200', instructor: 'B.Azarkhalili Aghmiyouni', date: '15 August', time: '12:00-15:00', location: 'SSCB 9200'},
        { course: 'CMPT 353', course: 'CMPT353', section: 'D100', instructor: 'G.Baker', date: '13 August', time: '15:30-16:30', location: 'SSCB 9200'},
        { course: 'CMPT 365', course: 'CMPT365', section: 'D100', instructor: 'Y.Chou', date: '7 August', time: '15:30-18:30', location: 'AQ 3182'},
        { course: 'CMPT 371', course: 'CMPT371', section: 'D100', instructor: 'O.Baghban Karimi', date: '6 August', time: '12:00-15:00', location: 'SRYE 1002'},
        { course: 'CMPT 376W', course: 'CMPT376W', section: 'D100', instructor: 'J.Edgar', date: '12 August', time: '08:30-11:30', location: 'AQ 3182'},
        { course: 'CMPT 376W', course: 'CMPT376W', section: 'D100', instructor: 'J.Edgar', date: '12 August', time: '08:30-11:30', location: 'WMC 3260'},
        { course: 'CMPT 376W', course: 'CMPT376W', section: 'D200', instructor: 'T.Immell', date: '12 August', time: '08:30-11:30', location: 'WMC 3260'},
        { course: 'CMPT 376W', course: 'CMPT376W', section: 'D200', instructor: 'T.Immell', date: '12 August', time: '08:30-11:30', location: 'AQ 3182'},
        { course: 'CMPT 403', course: 'CMPT403', section: 'D100', instructor: 'T.Wang', date: '10 August', time: '12:00-14:00', location: 'WMC 3260'},
        { course: 'CMPT 454', course: 'CMPT454', section: 'D100', instructor: 'J.Edgar', date: '11 August', time: '12:00-15:00', location: 'WMC 3520'},
        { course: 'CMPT 478', course: 'CMPT478', section: 'E100', instructor: 'S.Pearce', date: '9 August', time: '08:30-11:30', location: 'BLU 10655'},
        { course: 'CRIM 101', course: 'CRIM101', section: 'D100', instructor: 'N.Shchitov', date: '15 August', time: '08:30-11:30', location: 'AQ 3181'},
        { course: 'CRIM 103', course: 'CRIM103', section: 'D100', instructor: 'S.Michener', date: '9 August', time: '12:00-15:00', location: 'AQ 3181'},
        { course: 'CRIM 131', course: 'CRIM131', section: 'D100', instructor: 'R.Louden', date: '16 August', time: '15:30-18:30', location: 'EDB 7618'},
        { course: 'CRIM 220', course: 'CRIM220', section: 'D100', instructor: 'V.Lam', date: '10 August', time: '15:30-18:30', location: 'AQ 3182'},
        { course: 'CRIM 380', course: 'CRIM380', section: 'OL01', instructor: 'R.Frank', date: '9 August', time: '08:30-11:30', location: 'ONLINE'},
        { course: 'EASC 101', section: 'D100', instructor: 'K.Cameron', date: '12 August', time: '08:30-11:30', location: 'AQ 3003'},
        { course: 'EASC 107', section: 'E100', instructor: 'K.Cameron', date: '7 August', time: '19:00-22:00', location: 'WMC 3220'},
        { course: 'ECON 103', section: 'D100', instructor: 'N.Barkin', date: '14 August', time: '15:30-18:30', location: 'SSCB 9200'},
        { course: 'ECON 105', section: 'D100', instructor: 'B.Krauth', date: '12 August', time: '12:00-15:00', location: 'AQ 3181'},
        { course: 'ECON 201', section: 'D100', instructor: 'J.Boitnott', date: '7 August', time: '19:00-22:00', location: 'WMC 3260'},
        { course: 'ECON 260', section: 'D100', instructor: 'K.Wainwright', date: '13 August', time: '15:30-18:30', location: 'RCB 8100'},
        { course: 'ECON 280', section: 'D100', instructor: 'J.Friesen', date: '6 August', time: '08:30-11:30', location: 'WMC 3210'},
        { course: 'ECON 291', section: 'D100', instructor: 'J.Boitnott', date: '12 August', time: '12:00-15:00', location: 'WMC 3253'},
        { course: 'ECON 302', section: 'D100', instructor: 'N.Barkin', date: '6 August', time: '12:00-15:00', location: 'SSCB 9200'},
        { course: 'ECON 305', section: 'D100', instructor: 'Y.Yan', date: '7 August', time: '19:00-22:00', location: 'AQ 3005'},
        { course: 'ECON 310', section: 'D100', instructor: 'D.Cox', date: '7 August', time: '15:30-18:30', location: 'AQ 3181'},
        { course: 'ECON 333', section: 'D100', instructor: 'V.Golovetskyy', date: '10 August', time: '12:00-15:00', location: 'AQ 3182'},
        { course: 'ECON 342', section: 'D100', instructor: 'V.Aguiar Lozano', date: '9 August', time: '08:30-11:30', location: 'AQ 3181'},
        { course: 'ECON 345', section: 'D100', instructor: 'D.Cox', date: '12 August', time: '08:30-11:30', location: 'EDB 7618'},
        { course: 'ECON 381', section: 'D100', instructor: 'B.Krauth', date: '14 August', time: '15:30-18:30', location: 'RCB 8100'},
        { course: 'ECON 383', section: 'D100', instructor: 'N.Barkin', date: '16 August', time: '08:30-11:30', location: 'SSCK 9500'},
        { course: 'ECON 392', section: 'D100', instructor: 'Y.Yan', date: '6 August', time: '15:30-18:30', location: 'RCB 8100'},
        { course: 'ECON 460', section: 'D100', instructor: 'K.Wainwright', date: '12 August', time: '08:30-11:30', location: 'AQ 3150'},
        { course: 'ECON 484', section: 'D100', instructor: 'J.Boitnott', date: '13 August', time: '12:00-15:00', location: 'WMC 3253'},
        { course: 'EDUC 220', section: 'OL01', instructor: 'D.Chang', date: '14 August', time: '08:30-11:30', location: 'ONLINE'},
        { course: 'EDUC 328', section: 'E100', instructor: 'P.Yeung', date: '12 August', time: '19:00-22:00', location: 'HCC 1315'},
        { course: 'EDUC 424', section: 'D100', instructor: 'N.Pazoki Moakhar', date: '9 August', time: '19:00-22:00', location: 'RCB 8100'},
        { course: 'ENGL 111W', section: 'D100', instructor: 'T.Kehler', date: '9 August', time: '08:30-11:30', location: 'SSCB 9200'},
        { course: 'ENGL 112W', section: 'B100', instructor: 'M.Gillies', date: '15 August', time: '08:30-11:30', location: 'SSCC 9001'},
        { course: 'ENGL 312', section: 'D100', instructor: 'R.Arab', date: '7 August', time: '19:00-22:00', location: 'BLU 10921'},
        { course: 'ENGL 385', section: 'D100', instructor: 'J.Smith', date: '16 August', time: '12:00-15:00', location: 'WMC 3253'},
        { course: 'ENSC 220', section: 'D100', instructor: 'M.Parameswaran', date: '13 August', time: '19:00-22:00', location: 'SWH 10041'},
        { course: 'ENSC 225', section: 'E100', instructor: 'M.Parameswaran', date: '14 August', time: '19:00-22:00', location: 'AQ 3181'},
        { course: 'ENSC 251', section: 'D100', instructor: 'W.Scratchley', date: '15 August', time: '08:30-11:30', location: 'SWH 10041'},
        { course: 'ENSC 280', section: 'D100', instructor: 'A.Hajshirmohammadi', date: '7 August', time: '15:30-18:30', location: 'BLU 10655'},
        { course: 'ENSC 280', section: 'D100', instructor: 'A.Hajshirmohammadi', date: '7 August', time: '15:30-18:30', location: 'SSCB 9201'},
        { course: 'ENSC 320', section: 'E100', instructor: 'R.Vaughan', date: '12 August', time: '19:00-22:00', location: 'SSCC 9001'},
        { course: 'ENSC 425', section: 'D100', instructor: 'L.One', date: '15 August', time: '08:30-11:30', location: 'WMC 2202'},
        { course: 'ENSC 426', section: 'D100', instructor: 'L.One', date: '11 August', time: '15:30-18:30', location: 'WMC 3210'},
        { course: 'ENSC 428', section: 'E100', instructor: 'D.Lee', date: '8 August', time: '19:00-22:00', location: 'WMC 3511'},
        { course: 'ENSC 429', section: 'D100', instructor: 'J.Liang', date: '7 August', time: '08:30-11:30', location: 'AQ 3181'},
        { course: 'ENSC 470', section: 'D100', instructor: 'M.Sederberg', date: '16 August', time: '12:00-15:00', location: 'AQ 3005'},
        { course: 'ENSC 476', section: 'D100', instructor: 'P.Lane', date: '12 August', time: '12:00-15:00', location: 'WMC 2503'},
        { course: 'ENSC 482', section: 'D100', instructor: 'S.Payandeh', date: '11 August', time: '15:30-18:30', location: 'WMC 2503'},
        { course: 'FAL 99', section: 'D001', instructor: 'J.Heng Hartse', date: '10 August', time: '15:30-18:30', location: 'BLU 10655'},
        { course: 'FAL 99', section: 'D003', instructor: 'L.Cao', date: '9 August', time: '08:30-11:30', location: 'WMC 3511'},
        { course: 'FAN X99', section: 'D100', instructor: 'V.Singh', date: '16 August', time: '15:30-18:30', location: 'WMC 3210'},
        { course: 'GA 302', section: 'D100', instructor: 'Y.Liu', date: '7 August', time: '23:59', location: 'TAKE HOME'},
        { course: 'GEOG 312', section: 'OL01', instructor: 'J.Cripps', date: '13 August', time: '12:00-15:00', location: 'SSCC 9001'},
        { course: 'GERO 101', section: 'D100', instructor: 'K.Seetharaman', date: '9 August', time: '23:59', location: 'TAKE HOME'},
        { course: 'GERO 300', section: 'OL01', instructor: 'S.Hopper', date: '6 August', time: '19:00-22:00', location: 'WMC 3520'},
        { course: 'GSWS 101', section: 'OL01', instructor: 'M.Walks', date: '6 August', time: '11:59', location: 'TAKE HOME'},
        { course: 'GSWS 200', section: 'D100', instructor: 'M.Walks', date: '6 August', time: '23:59', location: 'TAKE HOME'},
        { course: 'GSWS 205', section: 'D100', instructor: 'M.Walks', date: '7 August', time: '23:59', location: 'TAKE HOME'},
        { course: 'GSWS 333', section: 'D200', instructor: 'A.Withers', date: '10 August', time: '15:30-18:30', location: 'AQ 5030'},
        { course: 'HIST 111', section: 'D100', instructor: 'A.Windel', date: '9 August', time: '08:30-11:30', location: 'WMC 3210'},
        { course: 'HIST 236', section: 'D100', instructor: 'J.Matsumura', date: '13 August', time: '12:00-15:00', location: 'WMC 3210'},
        { course: 'HIST 371', section: 'D100', instructor: 'J.Matsumura', date: '11 August', time: '12:00-15:00', location: 'AQ 5030'},
        { course: 'HSCI 100', section: 'D100', instructor: 'S.Massah', date: '6 August', time: '12:00-15:00', location: 'AQ 3005'},
        { course: 'HSCI 130', section: 'D100', instructor: 'R.Tucker', date: '16 August', time: '15:30-18:30', location: 'SWH 10061'},
        { course: 'HSCI 230', section: 'D100', instructor: 'W.Qualls', date: '7 August', time: '15:30-18:30', location: 'WMC 3260'},
        { course: 'HSCI 305', section: 'D100', instructor: 'M.Jamieson', date: '7 August', time: '15:30-18:30', location: 'WMC 3520'},
        { course: 'HSCI 308', section: 'D100', instructor: 'S.Erikson', date: '14 August', time: '19:00-22:00', location: 'WMC 3260'},
        { course: 'HSCI 402', section: 'D100', instructor: 'S.Parpouchi', date: '16 August', time: '12:00-15:00', location: 'SSCK 9500'},
        { course: 'HSCI 481', section: 'D100', instructor: 'R.Tucker', date: '9 August', time: '12:00-15:00', location: 'AQ 3005'},
        { course: 'HSCI 485', section: 'D100', instructor: 'S.Parpouchi', date: '9 August', time: '23:59', location: 'TAKE HOME'},
        { course: 'HUM 102W', section: 'OL01', instructor: 'D.Mirhady', date: '12 August', time: '15:30-17:00', location: 'AQ 3181'},
        { course: 'HUM 121', section: 'D900', instructor: 'J.Horncastle', date: '14 August', time: '08:30-11:30', location: 'SRYC 5100'},
        { course: 'HUM 277', section: 'D100', instructor: 'J.Horncastle', date: '10 August', time: '15:30-18:30', location: 'AQ 5037'},
        { course: 'HUM 340', section: 'D300', instructor: 'N.Mackenzie', date: '12 August', time: '08:30-11:30', location: 'RCB 8100'},
        { course: 'IAT 167', section: 'D100', instructor: 'M.Hatala', date: '9 August', time: '08:30-11:30', location: 'SRYC 5280'},
        { course: 'IAT 265', section: 'D100', instructor: 'Y.Yang', date: '7 August', time: '12:00-15:00', location: 'SRYC 3170'},
        { course: 'IAT 267', section: 'D100', instructor: 'R.Arias González', date: '16 August', time: '19:00-22:00', location: 'SRYC 3170'},
        { course: 'IS 200', section: 'D100', instructor: 'L.Masilamani', date: '10 August', time: '15:30-18:30', location: 'WMC 2202'},
        { course: 'IS 314', section: 'D100', instructor: 'D.Matijasevich', date: '16 August', time: '15:30-18:30', location: 'HCC 1900'},
        { course: 'JAPN 100', section: 'D200', instructor: 'M.Nozawa', date: '16 August', time: '12:00-15:00', location: 'WMC 3511'},
        { course: 'JAPN 100', section: 'D300', instructor: 'M.Nozawa', date: '10 August', time: '15:30-18:30', location: 'AQ 5008'},
        { course: 'JAPN 100', section: 'D400', instructor: 'M.Nozawa', date: '16 August', time: '15:30-18:30', location: 'WMC 3511'},
        { course: 'JAPN 100', section: 'E500', instructor: 'M.Nozawa', date: '14 August', time: '19:00-22:00', location: 'WMC 2501'},
        { course: 'JAPN 110', section: 'D200', instructor: 'N.Takei', date: '15 August', time: '08:30-11:30', location: 'BLU 10655'},
        { course: 'MACM 101', section: 'D100', instructor: 'S.Pearce', date: '15 August', time: '15:30-18:30', location: 'SSCC 9001'},
        { course: 'MACM 316', section: 'D100', instructor: 'J.MacDonald', date: '8 August', time: '12:00-15:00', location: 'SSCC 9001'},
        { course: 'MACM 316', section: 'D100', instructor: 'J.MacDonald', date: '8 August', time: '12:00-15:00', location: 'SSCB 9200'},
        { course: 'MATH 150', section: 'D100', instructor: 'M.Faizrahnemoon', date: '10 August', time: '12:00-15:00', location: 'EDB 7618'},
        { course: 'MATH 152', section: 'D100', instructor: 'S.Choi', date: '8 August', time: '08:30-11:30', location: 'SSCC 9001'},
        { course: 'MATH 155', section: 'D100', instructor: 'V.Jungic', date: '7 August', time: '12:00-15:00', location: 'SSCB 9200'},
        { course: 'MATH 157', section: 'D100', instructor: 'P.Tupper', date: '9 August', time: '08:30-11:30', location: 'WMC 3520'},
        { course: 'MATH 190', section: 'OL01', instructor: 'J.Niezen', date: '12 August', time: '15:30-18:30', location: 'ONLINE'},
        { course: 'MATH 232', section: 'D100', instructor: 'J.Chan', date: '11 August', time: '12:00-15:00', location: 'SRYE 1002'},
        { course: 'MATH 240', section: 'D100', instructor: 'I.Chen', date: '10 August', time: '15:30-18:30', location: 'EDB 7618'},
        { course: 'MATH 251', section: 'D100', instructor: 'P.Tupper', date: '6 August', time: '08:30-11:30', location: 'SSCC 9001'},
        { course: 'MATH 251', section: 'D200', instructor: 'R.Pyke', date: '6 August', time: '08:30-11:30', location: 'SRYC 5280'},
        { course: 'MATH 254', section: 'D100', instructor: 'V.Jungic', date: '9 August', time: '08:30-11:30', location: 'SSCK 9500'},
        { course: 'MATH 260', section: 'D100', instructor: 'J.Na', date: '16 August', time: '15:30-18:30', location: 'SSCC 9001'},
        { course: 'MATH 260', section: 'D200', instructor: 'H.Park', date: '16 August', time: '15:30-18:30', location: 'SRYC 5280'},
        { course: 'MATH 342', section: 'D100', instructor: 'I.Chen', date: '14 August', time: '15:30-18:30', location: 'WMC 3520'},
        { course: 'MATH 419', section: 'D100', instructor: 'S.Choi', date: '7 August', time: '08:30-11:30', location: 'WMC 3220'},
        { course: 'MATH 495', section: 'D100', instructor: 'B.Ashby', date: '8 August', time: '15:30-18:30', location: 'AQ 3154'},
        { course: 'MBB 222', section: 'D100', instructor: 'I.Kovalyova', date: '12 August', time: '15:30-18:30', location: 'SSCB 9200'},
        { course: 'MBB 231', section: 'D100', instructor: 'I.Northwood', date: '9 August', time: '08:30-11:30', location: 'SSCB 9201'},
        { course: 'MBB 308', section: 'D100', instructor: 'S.Vlachos', date: '6 August', time: '12:00-15:00', location: 'EDB 7618'},
        { course: 'MBB 331', section: 'D100', instructor: 'S.Sneddon', date: '13 August', time: '12:00-15:00', location: 'EDB 7618'},
        { course: 'MBB 429', section: 'D100', instructor: 'P.Unrau', date: '11 August', time: '12:00-15:00', location: 'WMC 3210'},
        { course: 'MBB 462', section: 'D100', instructor: 'S.Sneddon', date: '8 August', time: '08:30-11:30', location: 'AQ 5037'},
        { course: 'MSE 381', section: 'D100', instructor: 'S.Arzanpour', date: '10 August', time: '15:30-18:30', location: 'SRYE 1002'},
        { course: 'PHIL 100W', section: 'D100', instructor: 'M.Hahn', date: '13 August', time: '19:00-22:00', location: 'SSCB 9200'},
        { course: 'PHIL 105', section: 'D100', instructor: 'L.Crawford', date: '6 August', time: '12:00-15:00', location: 'SSCB 9201'},
        { course: 'PHIL 110', section: 'D100', instructor: 'N.Fillion', date: '6 August', time: '15:30-18:30', location: 'EDB 7618'},
        { course: 'PHIL 120W', section: 'D100', instructor: 'M.Lucas', date: '10 August', time: '15:30-18:30', location: 'AQ 3181'},
        { course: 'PHIL 300', section: 'D100', instructor: 'L.Crawford', date: '16 August', time: '15:30-18:30', location: 'SSCK 9500'},
        { course: 'PHYS 100', section: 'D200', instructor: 'S.Bagheri Najmi', date: '15 August', time: '12:00-15:00', location: 'AQ 3181'},
        { course: 'PHYS 101', section: 'D200', instructor: 'A.Debenedictis', date: '12 August', time: '08:30-11:30', location: 'SSCB 9200'},
        { course: 'PHYS 101', section: 'D200', instructor: 'A.Debenedictis', date: '12 August', time: '08:30-11:30', location: 'SSCB 9201'},
        { course: 'PHYS 102', section: 'D200', instructor: 'S.Bagheri Najmi', date: '12 August', time: '08:30-11:30', location: 'AQ 3181'},
        { course: 'PHYS 121', section: 'D200', instructor: 'M.Chen', date: '6 August', time: '15:30-18:30', location: 'SSCC 9001'},
        { course: 'POL 100', section: 'D100', instructor: 'S.Jeram', date: '7 August', time: '23:59', location: 'TAKE HOME'},
        { course: 'POL 121', section: 'D900', instructor: 'B.Thomas', date: '7 August', time: '19:00-22:00', location: 'SRYC 5100'},
        { course: 'POL 132', section: 'D100', instructor: 'H.Ali', date: '9 August', time: '08:30-11:30', location: 'WMC 3510'},
        { course: 'POL 151', section: 'D100', instructor: 'G.Bowbrick', date: '15 August', time: '08:30-11:00', location: 'AQ 3150'},
        { course: 'POL 222', section: 'B100', instructor: 'A.Heard', date: '10 August', time: '12:00-14:00', location: 'ONLINE'},
        { course: 'POL 324', section: 'B100', instructor: 'A.Heard', date: '12 August', time: '08:30-10:30', location: 'ONLINE'},
        { course: 'POL 342', section: 'D100', instructor: 'J.Busumtwi-Sam', date: '6 August', time: '23:59', location: 'TAKE HOME'},
        { course: 'POL 349', section: 'D100', instructor: 'L.Masilamani', date: '6 August', time: '10:00', location: 'TAKE HOME'},
        { course: 'POL 446W', section: 'D100', instructor: 'A.Tagirova', date: '8 August', time: '09:00', location: 'TAKE HOME'},
        { course: 'POL 448', section: 'D100', instructor: 'J.Busumtwi-Sam', date: '8 August', time: '23:59', location: 'TAKE HOME'},
        { course: 'PSYC 201W', section: 'D100', instructor: 'E.Caldbick', date: '14 August', time: '08:30-11:30', location: 'SSCC 9001'},
        { course: 'PSYC 210', section: 'D100', instructor: 'M.Sigal', date: '12 August', time: '12:00-15:00', location: 'WMC 3520'},
        { course: 'PSYC 325', section: 'D100', instructor: 'E.Caldbick', date: '8 August', time: '08:30-11:30', location: 'WMC 3520'},
        { course: 'PSYC 382', section: 'D100', instructor: 'R.deKergommeaux', date: '10 August', time: '15:30-18:30', location: 'SSCB 9200'},
        { course: 'PSYC 388', section: 'D100', instructor: 'R.Mistlberger', date: '16 August', time: '12:00-15:00', location: 'BLU 9660'},
        { course: 'PSYC 391', section: 'D100', instructor: 'T.Boucher', date: '13 August', time: '15:30-18:30', location: 'SSCB 9201'},
        { course: 'PSYC 391', section: 'D200', instructor: 'I.Gordon', date: '6 August', time: '12:00-15:00', location: 'AQ 3003'},
        { course: 'PUB 355W', section: 'OL01', instructor: 'A.Hudnall', date: '11 August', time: '23:59', location: 'TAKE HOME'},
        { course: 'REM 100', section: 'OL01', instructor: 'A.Cancelli', date: '11 August', time: '15:30-18:30', location: 'ONLINE'},
        { course: 'REM 350', section: 'D100', instructor: 'W.Niver', date: '14 August', time: '15:30-18:30', location: 'EDB 7618'},
        { course: 'SA 101', section: 'D100', instructor: 'E.Montpellier', date: '13 August', time: '15:30-18:30', location: 'AQ 3005'},
        { course: 'SA 150', section: 'D100', instructor: 'A.Fakhri Joshani', date: '7 August', time: '19:00-22:00', location: 'AQ 3181'},
        { course: 'SEE 221', section: 'D100', instructor: 'S.Khan', date: '15 August', time: '12:00-15:00', location: 'SRYE 3016'},
        { course: 'SEE 230', section: 'D100', instructor: 'M.Jahromi', date: '12 August', time: '12:00-15:00', location: 'SRYE 3016'},
        { course: 'SEE 241', section: 'D100', instructor: 'M.Kaur', date: '10 August', time: '15:30-18:30', location: 'SRYE 3016'},
        { course: 'SEE 300', section: 'D100', instructor: 'M.Xu', date: '16 August', time: '15:30-18:30', location: 'SRYE 3016'},
        { course: 'SEE 324', section: 'D100', instructor: 'C.Copeland', date: '8 August', time: '08:30-11:30', location: 'SRYE 3016'},
        { course: 'SEE 331', section: 'D100', instructor: 'M.Resener', date: '15 August', time: '08:30-11:30', location: 'SRYE 3016'},
        { course: 'SEE 332', section: 'D100', instructor: 'M.Resener', date: '15 August', time: '12:00-15:00', location: 'SRYE 2016'},
        { course: 'SEE 341', section: 'D100', instructor: 'V.Pecunia', date: '9 August', time: '12:00-15:00', location: 'SRYE 3016'},
        { course: 'SEE 342', section: 'D100', instructor: 'M.Jahromi', date: '13 August', time: '12:00-15:00', location: 'SRYE 3016'},
        { course: 'SPAN 100', section: 'B100', instructor: 'M.Mayo-Harp', date: '6 August', time: '19:00-22:00', location: 'AQ 3154'},
        { course: 'SPAN 110', section: 'B100', instructor: 'M.Mayo-Harp', date: '6 August', time: '08:30-11:30', location: 'WMC 3517'},
        { course: 'STAT 100', section: 'D100', instructor: 'W.Lin', date: '13 August', time: '19:00-22:00', location: 'WMC 3520'},
        { course: 'STAT 201', section: 'D100', instructor: 'W.McNeney', date: '15 August', time: '12:00-15:00', location: 'SSCC 9001'},
        { course: 'STAT 201', section: 'D100', instructor: 'W.McNeney', date: '15 August', time: '12:00-15:00', location: 'WMC 3220'},
        { course: 'STAT 201', section: 'OL01', instructor: 'W.Lin', date: '6 August', time: '08:30-11:30', location: 'WMC 3520'},
        { course: 'STAT 203', section: 'OL01', instructor: 'W.Lin', date: '6 August', time: '15:30-18:30', location: 'WMC 3520'},
        { course: 'STAT 270', section: 'D100', instructor: 'S.Pai', date: '9 August', time: '08:30-11:30', location: 'AQ 3003'},
        { course: 'STAT 270', section: 'OL01', instructor: 'G.Perera', date: '15 August', time: '08:30-11:30', location: 'WMC 3520'},
        { course: 'STAT 302', section: 'D100', instructor: 'W.McNeney', date: '10 August', time: '12:00-15:00', location: 'SSCB 9200'},
        { course: 'STAT 302', section: 'OL01', instructor: 'G.Perera', date: '10 August', time: '15:30-18:30', location: 'WMC 3520'},
        { course: 'TEKX 101', section: 'D100', instructor: 'J.Ferrer', date: '15 August', time: '08:30-11:30', location: 'RCB 8100'},
        { course: 'WL 104W', section: 'D100', instructor: 'R.Mehri', date: '16 August', time: '12:00-15:00', location: 'AQ 5030'}
        
        
    ];

    // Filter results based on course code
    const filteredExams = examData.filter(exam => exam.course.toLowerCase().includes(courseCode.toLowerCase()));

    // Display results
    if (filteredExams.length > 0) {
        filteredExams.forEach(exam => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.innerHTML = `
                <strong>Course:</strong> ${exam.course}<br>
                <strong>Section:</strong> ${exam.section}<br>
                <strong>Instructor:</strong> ${exam.instructor}<br>
                <strong>Date:</strong> ${exam.date}<br>
                <strong>Time:</strong> ${exam.time}<br>
                <strong>Location:</strong> ${exam.location}
            `;
            resultsSection.appendChild(resultItem);
        });
    } else {
        resultsSection.innerHTML = '<p>No exams found for the entered course code.</p>';
    }
}
