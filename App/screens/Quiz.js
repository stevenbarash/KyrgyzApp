import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Text,
  SafeAreaView,
} from 'react-native';
import Tts from 'react-native-tts';

// import TEMP_QUESTIONS from '../data/unit1';
import {Button, ButtonContainer} from '../components/Button';
import {Alert} from '../components/Alert';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
    paddingHorizontal: 20,
  },
  questionContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    letterSpacing: -0.02,
    fontWeight: '600',
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: 'space-between',
  },
});

class Quiz extends React.Component {
  state = {
    correctCount: 0,
    totalCount: this.props.navigation.getParam('questions', []).length,

    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,
  };

  // constructor() {
  //   this.setState({
  //     totalCount: this.props.navigation.getParam('questions', []).length,
  //   });
  // }

  componentDidMount() {
    Tts.getInitStatus().then(() => {
      Tts.addEventListener('tts-start', event => console.log('start', event));
      Tts.addEventListener('tts-finish', event => console.log('finish', event));
      Tts.addEventListener('tts-cancel', event => console.log('cancel', event));
      Tts.voices().then(voices => console.log(voices));

      Tts.setDefaultVoice('com.apple.ttsbundle.Milena-compact');
      Tts.setDefaultLanguage('ru-RU');
    });
  }

  answer = correct => {
    this.setState(
      state => {
        const nextState = {answered: true};

        if (correct) {
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;
        } else {
          nextState.answerCorrect = false;
        }

        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 750);
      },
    );
  };

  nextQuestion = () => {
    this.setState(state => {
      let nextIndex = state.activeQuestionIndex + 1;

      if (nextIndex >= state.totalCount) {
        nextIndex = 0;
      }

      return {
        activeQuestionIndex: nextIndex,
        answered: false,
      };
    });
  };

  render() {
    // alert(JSON.stringify(this.state));
    const questions = this.props.navigation.getParam('questions', []);
    const question = questions[this.state.activeQuestionIndex];

    // const question = TEMP_QUESTIONS[this.state.activeQuestionIndex];

    return (
      <View style={[styles.container]}>
        <SafeAreaView style={styles.safearea}>
          <View>
            <View style={styles.questionContainer}>
              <Text style={styles.text}>{question.question}</Text>
              <TouchableOpacity
                onPress={() => {
                  console.log(question.question);
                  Tts.speak(question.question);
                }}>
                <Text>🔊</Text>
              </TouchableOpacity>
            </View>
            <ButtonContainer>
              {question.answers.map(answer => (
                <Button
                  key={answer.id}
                  text={answer.text}
                  onPress={() => this.answer(answer.correct)}
                />
              ))}
            </ButtonContainer>
          </View>

          <Text style={styles.text}>
            {`${this.state.correctCount}/${this.state.totalCount}`}
          </Text>
        </SafeAreaView>
        <Alert
          correct={this.state.answerCorrect}
          visible={this.state.answered}
        />
      </View>
    );
  }
}

export default Quiz;
