import React from 'react';
import createObjectProp from 'react-object-prop';
import background from './background';
import foreground from './foreground';
import styles from './pluralsight-score.scss';

const percentile2height = percentile =>
  (1 - Math.acos(percentile / 50 - 1) / Math.PI) * 190 - 1;

// Dimension: 530x190
export default class PluralsightScore extends React.PureComponent {

  _graphStyle = createObjectProp();
  animationFrame = null;

  state = {
    percentile: 0
  };

  componentDidMount() {
    this.componentDidUpdate({ percentile: 0 });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.percentile !== this.props.percentile) {
      this.speed = (this.props.percentile - prevProps.percentile) / 30;
    }
    window.cancelAnimationFrame(this.animationFrame);
    if (this.props.percentile !== this.state.percentile) {
      this.animationFrame = window.requestAnimationFrame(this.animate);
    }
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrame);
  }

  animate = () => {
    this.setState(state => ({
      percentile:
        Math[state.percentile > this.props.percentile ? 'max' : 'min'](
          this.props.percentile,
          state.percentile + this.speed
        )
    }));
  }

  get backgroundViewBox() {
    return '0 0 ' + Math.round(this.state.percentile * 5.3) + ' 190';
  }

  get graphStyle() {
    return this._graphStyle({
      height: percentile2height(this.state.percentile),
      width: 'calc(' + this.state.percentile + '% - 9px)'
    });
  }

  get mainClassName() {
    if (this.props.hidden) {
      return styles.main;
    }
    return styles.main + ' ' + styles.mainVisible;
  }

  render() {
    return (
      <div
        className={this.mainClassName}
        ref={this.props.onRef}
      >
        <div
          aria-hidden
          className={styles.levels}
        >
          <dl>
            <dt>Expert</dt>
            <dd>201-300</dd>
          </dl>
          <dl>
            <dt>Proficient</dt>
            <dd>101-200</dd>
          </dl>
          <dl>
            <dt>Novice</dt>
            <dd>0-100</dd>
          </dl>
        </div>
        <div className={styles.chart}>
          <div
            className={styles.graph}
            style={this.graphStyle}
          >
            <svg
              className={styles.background}
              preserveAspectRatio="none"
              viewBox={this.backgroundViewBox}
            >
              <path
                d={background.novice}
                fill="#FFC200"
              />
              <path
                d={background.proficient}
                fill="#86CE21"
              />
              <path
                d={background.expert}
                fill="#26C1FB"
              />
            </svg>
          </div>
          <svg
            aria-hidden
            className={styles.foreground}
            preserveAspectRatio="none"
            viewBox="0 0 530 190"
          >
            <path
              d={foreground.novice}
              stroke="#FFC200"
              strokeWidth={2}
            />
            <path
              d={foreground.proficient}
              stroke="#86CE21"
              strokeWidth={2}
            />
            <path
              d={foreground.expert}
              stroke="#26C1FB"
              strokeWidth={2}
            />
          </svg>
        </div>
      </div>
    );
  }
}
