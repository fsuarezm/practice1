<?php
/**
 * This files is part of the practice1 Application
 *
 * (c) Francisco Suárez <fsuarezm@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 * Date: 19/08/17
 * Time: 20:42
 */

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use FOS\UserBundle\Model\User as BaseUser;

class User extends BaseUser
{
    /**
     * @var integer
     */
    protected $id;

    /**
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }
}