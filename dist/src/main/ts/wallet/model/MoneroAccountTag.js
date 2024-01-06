"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
 * Represents an account tag.
 */
class MoneroAccountTag {





  constructor(accountTag) {
    Object.assign(this, accountTag);
  }

  getTag() {
    return this.tag;
  }

  setTag(tag) {
    this.tag = tag;
    return this;
  }

  getLabel() {
    return this.label;
  }

  setLabel(label) {
    this.label = label;
    return this;
  }

  getAccountIndices() {
    return this.accountIndices;
  }

  setAccountIndices(accountIndices) {
    this.accountIndices = accountIndices;
    return this;
  }
}exports.default = MoneroAccountTag;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJNb25lcm9BY2NvdW50VGFnIiwiY29uc3RydWN0b3IiLCJhY2NvdW50VGFnIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0VGFnIiwidGFnIiwic2V0VGFnIiwiZ2V0TGFiZWwiLCJsYWJlbCIsInNldExhYmVsIiwiZ2V0QWNjb3VudEluZGljZXMiLCJhY2NvdW50SW5kaWNlcyIsInNldEFjY291bnRJbmRpY2VzIiwiZXhwb3J0cyIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWFpbi90cy93YWxsZXQvbW9kZWwvTW9uZXJvQWNjb3VudFRhZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlcHJlc2VudHMgYW4gYWNjb3VudCB0YWcuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbmVyb0FjY291bnRUYWcge1xuXG4gIHRhZzogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBhY2NvdW50SW5kaWNlczogbnVtYmVyW107XG4gIFxuICBjb25zdHJ1Y3RvcihhY2NvdW50VGFnPzogUGFydGlhbDxNb25lcm9BY2NvdW50VGFnPikge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgYWNjb3VudFRhZyk7XG4gIH1cbiAgXG4gIGdldFRhZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRhZztcbiAgfVxuICBcbiAgc2V0VGFnKHRhZzogc3RyaW5nKTogTW9uZXJvQWNjb3VudFRhZyB7XG4gICAgdGhpcy50YWcgPSB0YWc7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgXG4gIGdldExhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWw7XG4gIH1cbiAgXG4gIHNldExhYmVsKGxhYmVsOiBzdHJpbmcpOiBNb25lcm9BY2NvdW50VGFnIHtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgXG4gIGdldEFjY291bnRJbmRpY2VzKCk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gdGhpcy5hY2NvdW50SW5kaWNlcztcbiAgfVxuICBcbiAgc2V0QWNjb3VudEluZGljZXMoYWNjb3VudEluZGljZXM6IG51bWJlcltdKTogTW9uZXJvQWNjb3VudFRhZyB7XG4gICAgdGhpcy5hY2NvdW50SW5kaWNlcyA9IGFjY291bnRJbmRpY2VzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJxR0FBQTtBQUNBO0FBQ0E7QUFDZSxNQUFNQSxnQkFBZ0IsQ0FBQzs7Ozs7O0VBTXBDQyxXQUFXQSxDQUFDQyxVQUFzQyxFQUFFO0lBQ2xEQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxJQUFJLEVBQUVGLFVBQVUsQ0FBQztFQUNqQzs7RUFFQUcsTUFBTUEsQ0FBQSxFQUFXO0lBQ2YsT0FBTyxJQUFJLENBQUNDLEdBQUc7RUFDakI7O0VBRUFDLE1BQU1BLENBQUNELEdBQVcsRUFBb0I7SUFDcEMsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxPQUFPLElBQUk7RUFDYjs7RUFFQUUsUUFBUUEsQ0FBQSxFQUFXO0lBQ2pCLE9BQU8sSUFBSSxDQUFDQyxLQUFLO0VBQ25COztFQUVBQyxRQUFRQSxDQUFDRCxLQUFhLEVBQW9CO0lBQ3hDLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLE9BQU8sSUFBSTtFQUNiOztFQUVBRSxpQkFBaUJBLENBQUEsRUFBYTtJQUM1QixPQUFPLElBQUksQ0FBQ0MsY0FBYztFQUM1Qjs7RUFFQUMsaUJBQWlCQSxDQUFDRCxjQUF3QixFQUFvQjtJQUM1RCxJQUFJLENBQUNBLGNBQWMsR0FBR0EsY0FBYztJQUNwQyxPQUFPLElBQUk7RUFDYjtBQUNGLENBQUNFLE9BQUEsQ0FBQUMsT0FBQSxHQUFBZixnQkFBQSJ9