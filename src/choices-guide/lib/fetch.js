import OpenStadComponentLibs from '../../libs/index.jsx';

function fetchChoicesGuide({ config }) {

  let url = `${config.api && config.api.url   }/api/site/${  config.siteId  }/choicesguide/${  config.choicesGuideId}?includeChoices=1&includeQuestions=1`;
  let headers = OpenStadComponentLibs.api.getHeaders();

  return fetch(url, { headers })
    .then((response) => {
      return response.json();
    })
    .then((json) => {

      let data = {
        choicesGuideId: json.id,
        images: json.images,
        choicesGuideConfig: json.config,
        title: json.title,
        description: json.description,
        choices: json.choices || [],
        questionGroups: json.questiongroups || [],
        status: 'active',
      };

      // backwards compatibility
      if (data.questionGroups && data.questionGroups.map) {
        data.questionGroups.map( questiongroup => {
          if (questiongroup.questions && questiongroup.questions.map) {
            questiongroup.questions.map(question => {
            if (question.type == 'continuous') question.type = 'a-to-b';
            if (question.type == 'enum-buttons') question.type = 'enum-radio';
              if (question.type == 'a-to-b') {
                if (question.values && question.values.A) question.values.A.labelBelow = question.values.A.labelBelow || question.minLabel;
                if (question.values && question.values.B) question.values.B.labelBelow = question.values.B.labelBelow || question.maxLabel;
              }
            });
          }
        });
      } 

      // fix choices: delete answers for questions that do not exist
      if (data.questionGroups && data.questionGroups.map) {
        data.questionGroups.map( questiongroup => {
          if (questiongroup.questions && questiongroup.questions.map) {
            let questionIds = questiongroup.questions.map(question => question.id);
            if (questiongroup.choices && questiongroup.choices.map) {
              questiongroup.choices.map(choice => {
                if (choice.answers) {
                  let keys = Object.keys(choice.answers).map(key => parseInt(key));
                  let oldkeys = keys.filter( key => questionIds.indexOf(key) == -1 );
                  oldkeys.map(key => delete choice.answers[key]);
                }
              });
            }
          }
        });
      } 

      return data;

    });

}

export {
  fetchChoicesGuide as default,
}
