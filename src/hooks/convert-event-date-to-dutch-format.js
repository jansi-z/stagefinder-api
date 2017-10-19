// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

function convertDate(originalDate){
  const date = new Date(originalDate);
  const day = date.getDate();
  const weekday = date.getDay();
  const month = (date.getMonth() + 1);
  const year = date.getFullYear();
  const days = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  const months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

  return(`${days[weekday]} ${day} ${months[month]} ${year}`);
}

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function convertEventDateToDutchFormat (hook) {

    if (hook.method === 'find'){

      hook.result.data = hook.result.data.map((event) => {
        return { ...event, dutchDate: convertDate(event.date) }
      })

      return hook;

    }else{
      hook.result = { ...hook.result, dutchDate: convertDate(hook.result.date) }

      return hook;
    }
  };
};
