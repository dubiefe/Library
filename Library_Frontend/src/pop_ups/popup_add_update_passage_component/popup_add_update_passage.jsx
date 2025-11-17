import './popup_add_update_passage.css'
import '../popup.css'

function Popup_Add_Update_Passage() {

  return (
    <>
    <div id="popup">
        
        <div id="popupAddUpdatePassage">
            <h2 id="titleAddUpdatePassage">Add/Update a passage for the book ...</h2>
            <div id="fromAddUpdatePassage">
                <label for="pagesTitle">Page(s)</label>
                <div id="divPages">
                    <div id="divRadioPages">
                        <div>
                            <input type="radio" id="single" name="pages" value="onePage" checked/>
                            <label for="single">Single page</label>
                        </div>
                        <div>
                            <input type="radio" id="multiple" name="pages" value="multiplePages"/>
                            <label for="multiple">Multiple pages</label>
                        </div>
                    </div>
                    <div id="choicePages">
                        <div id="firstChoice">
                            <p>p.</p>
                            <input type="number" id="singlePage"/>
                        </div>
                        <div id="secondChoice">
                            <p>p.</p>
                            <input type="number" id="firstPage"/>
                            <p> to </p>
                            <input type="number" id="secondPage"/>
                        </div>
                    </div>
                </div>
                <label for="authorBookAddUpdate">Comment:</label>
                <input type="text" placeholder="comment" id="commentPassageAddUpdate"/>
            </div>
            <div id="errorAddUpdatePassage">
                <p id="errorPagesAddUpdatePassage"></p>
                <p id="errorCommentAddUpdatePassage"></p>
            </div>
            <div class="divButtons">
                <button id="cancelAddUpdatePassage">
                    Cancel
                    <img src="style/images/cancel.png" alt="cancelAddUpdatePassage"/>
                </button>
                <button id="validateAddUpdatePassage">
                    Validate
                    <img src="style/images/validate.png" alt="validateAddUpdatePassage"/>
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Popup_Add_Update_Passage