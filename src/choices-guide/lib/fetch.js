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
          title: json.title,
          description: json.description,
          choices: json.choices || [],
          questionGroups: json.questiongroups || [],
          status: 'active',
        };

        return data;
        
      })

}

export {
  fetchChoicesGuide as default,
}
