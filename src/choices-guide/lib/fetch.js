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
              if (question.type == 'a-to-b') {
                if (question.values && question.values.A) question.values.A.labelBelow = question.values.A.labelBelow || question.minLabel;
                if (question.values && question.values.B) question.values.B.labelBelow = question.values.B.labelBelow || question.maxLabel;
              }
            });
          }
        });

        return data;
      } 
    });

}

export {
  fetchChoicesGuide as default,
}
