<?php
/**
 * kort - Reward class
 */
namespace Model;

/**
 * The Reward class represents the entity, which a user can win.
 *
 * A reward may contain an amount of koins and one or more badges.
 *
 * @see Model\Badge
 */
class Reward
{
    /** Array of badges */
    protected $badges = array();
    /** Amount of koins */
    protected $koinCount = 0;

    /**
    * Creates a new instance of Reward
    * @param int $koinCountTotal amount of koins that the user has
    * @param int $koinCountNew amount of koins for this Reward
    * @param array $badges array of Badges of this Reward
    * @return a new instance of Reward
    */
    public function __construct($koinCountTotal, $koinCountNew = 0, $badges = array())
    {
        $this->koinCountTotal = $koinCountTotal;
        $this->koinCountNew = $koinCountNew;
        $this->badges = $badges;
    }

    /**
    * Return the reward in JSON format
    * @return the reward in JSON format
    */
    public function toJson()
    {
        $response = array();
        if (count($this->getBadges()) > 0) {
            $response["badges"] = Badge::getValues($this->getBadges());
        } else {
            $response["badges"] = array();
        }
        $response["koin_count_new"] = $this->getKoinCountNew();
        $response["koin_count_total"] = $this->getKoinCountTotal();

        return json_encode($response);
    }

    /**
    * Return the badges of this rewards
    * @return the badges of this rewards
    */
    protected function getBadges()
    {
        return $this->badges;
    }

    /**
    * Return the amount of koins of this reward
    * @return int the amount of koins of this reward
    */
    protected function getKoinCountNew()
    {
        return $this->koinCountNew;
    }

    /**
    * Return the amount total koins of the user after receiving this reward
    * @return int the total amount of koins of the user
    */
    protected function getKoinCountTotal()
    {
        return $this->koinCountTotal;
    }
}
