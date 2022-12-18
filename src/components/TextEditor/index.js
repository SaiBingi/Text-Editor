import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  BgContainer,
  Container,
  TextEditorContainer1,
  Heading,
  TextEditorImage,
  TextEditorContainer2,
  ButtonsContainer,
  ButtonItem,
  Button1,
  Button2,
  Button3,
  TextInput,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    isBoldClicked: false,
    isItalicClicked: false,
    isUnderlineClicked: false,
    textInput: '',
  }

  onChangeTextInput = event => this.setState({textInput: event.target.value})

  onClickUnderlineButton = () =>
    this.setState(prevState => ({
      isUnderlineClicked: !prevState.isUnderlineClicked,
    }))

  onClickBoldButton = () =>
    this.setState(prevState => ({
      isBoldClicked: !prevState.isBoldClicked,
    }))

  onClickItalicButton = () =>
    this.setState(prevState => ({
      isItalicClicked: !prevState.isItalicClicked,
    }))

  render() {
    const {
      isBoldClicked,
      isItalicClicked,
      isUnderlineClicked,
      textInput,
    } = this.state

    return (
      <BgContainer>
        <Container>
          <TextEditorContainer1>
            <Heading>Text Editor</Heading>
            <TextEditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextEditorContainer1>
          <TextEditorContainer2>
            <ButtonsContainer>
              <ButtonItem>
                <Button1
                  isBoldClicked={isBoldClicked}
                  onClick={this.onClickBoldButton}
                  data-testid="bold"
                >
                  <VscBold size={25} />
                </Button1>
              </ButtonItem>
              <ButtonItem>
                <Button2
                  isItalicClicked={isItalicClicked}
                  onClick={this.onClickItalicButton}
                  data-testid="italic"
                >
                  <GoItalic size={25} />
                </Button2>
              </ButtonItem>
              <ButtonItem>
                <Button3
                  isUnderlineClicked={isUnderlineClicked}
                  onClick={this.onClickUnderlineButton}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={25} />
                </Button3>
              </ButtonItem>
            </ButtonsContainer>
            <TextInput
              isBoldClicked={isBoldClicked}
              isItalicClicked={isItalicClicked}
              isUnderlineClicked={isUnderlineClicked}
              onChange={this.onChangeTextInput}
              rows="28"
              cols="60"
            >
              {textInput}
            </TextInput>
          </TextEditorContainer2>
        </Container>
      </BgContainer>
    )
  }
}

export default TextEditor
