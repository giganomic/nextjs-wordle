export const MESSAGE_NOT_A_WORD = 'Nicht in der Wortliste'
export const MESSAGE_NOT_ENOUGH_LETTERS = 'Nicht genügen Buchstaben'

export const TEXT_NEW_GAME = 'Neues Spiel'
export const TEXT_WON = ['FANTASTISCH!','GUT GEMACHT!']
export const TEXT_LOST = ['SCHADE!']

export const TEXT_INFO_HEADLINE = 'Spielanleitung'
export const TEXT_INFO_CONTENT_1 = 'Errate das Wordl in 6 Versuchen!'
export const TEXT_INFO_CONTENT_2 = `Das Ziel des Spiels ist, ein Wort mit 5 Buchstaben zu erraten.
Die Umlaute Ä, Ö und Ü wurden durch AE, OE bzw. UE ersetzt, und ẞ durch SS.
Gib ein Wort ein und drück auf das Häkchen links unten, um es zu überprüfen.
Erlaubt sind nur korrekte deutsche Wörter.
`
export const TEXT_INFO_CONTENT_3 = 'Nach jedem Versuch erhältst du einen Hinweis dazu, wie viele Buchstaben du richtig erraten hast.'
export const TEXT_INFO_CONTENT_4 = 'Beispiel:'
export const TEXT_INFO_CONTENT_5 = <>Der Buchstabe <strong>R</strong> kommt in dem Wort vor und ist an der richtigen Stelle.</>
export const TEXT_INFO_CONTENT_6 = <>Der Buchstabe <strong>N</strong> kommt in dem Wort vor, ist aber an der falschen Stelle.</>
export const TEXT_INFO_CONTENT_7 = <>Der Buchstabe <strong>G</strong> kommt an keiner Stelle in dem Wort vor.</>

export const TEXT_INFO_EXAMPLE_WORD_MATCH = [{letter:'G',style:'default'},{letter:'E',style:'default'},{letter:'R',style:'match'},{letter:'N',style:'default'},{letter:'E',style:'default'}]
export const TEXT_INFO_EXAMPLE_WORD_OCCUR = [{letter:'G',style:'default'},{letter:'E',style:'default'},{letter:'R',style:'default'},{letter:'N',style:'occur'},{letter:'E',style:'default'}]
export const TEXT_INFO_EXAMPLE_WORD_NOTOCCUR = [{letter:'G',style:'notoccur'},{letter:'E',style:'default'},{letter:'R',style:'default'},{letter:'N',style:'default'},{letter:'E',style:'default'}]

export const TEXT_INFO_FOOTER = <>Dies ist eine Open-Source Version des Spiels "Wordle". Code verfügbar auf <a href="https://github.com/giganomic/nextjs-wordle" style={{textDecoration: 'underline'}} target="_blank">GitHub</a></>

export const BUTTON_CLOSE = 'Schließen'
export const MODAL_CLOSE_WINDOW = 'Fenster schließen'