import classNames from "classnames";
import { Level } from "../../lib/profile/skills";
import style from "./LevelTile.module.scss";

type Props = {
  level: Level;
  inline?: boolean;
};
export const LevelTile: React.FC<Props> = ({ level, inline = false }) => {
  const levels = [1, 2, 3, 4, 5];
  return (
    <div
      className={classNames({
        [style.LevelTile]: true,
        [style["LevelTile--inline"]]: inline,
      })}
    >
      {levels.map((l) => (
        <div
          key={l}
          className={classNames({
            [style.LevelTile__item]: true,
            [style["LevelTile__item--active"]]: l <= level,
          })}
        />
      ))}
    </div>
  );
};
